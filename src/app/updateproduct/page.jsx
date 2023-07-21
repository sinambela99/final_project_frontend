"use client";

import { useState } from 'react';
import axios from 'axios';

export default function UpdateProduct() {
  const [params, setProductId] = useState('');
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    discount: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'id') {
      setProductId(value);
    } else {
      setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProduct((prevProduct) => ({ ...prevProduct, photo: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('file', product.photo);
      formData.append('upload_preset', 'my-uploads');

      const response = await fetch('https://api.cloudinary.com/v1_1/dv9rlshr4/image/upload', {
        method: 'PUT',
        body: formData,
      });

      const data = await response.json();
      const uploadedFileURL = data.secure_url;
      console.log('File uploaded successfully:', uploadedFileURL);

      const productData = {
        name: product.name,
        description: product.description,
        price: product.price,
        discount: product.discount,
        photo: uploadedFileURL,
      };

      const serverResponse = await axios.put(`http://localhost:8081/api/product/${params}`, productData);

      console.log('Product updated successfully:', serverResponse.data);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className="w-full max-w-[1000px] mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Update Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="productId" className="block font-medium">
            Product ID:
          </label>
          <input
            type="text"
            id="productId"
            name="id"
            value={params}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="productName" className="block font-medium">
            Product Name:
          </label>
          <input
            type="text"
            id="productName"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="productDescription" className="block font-medium">
            Product Description:
          </label>
          <textarea
            id="productDescription"
            name="description"
            value={product.description}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="productPrice" className="block font-medium">
            Price:
          </label>
          <input
            type="number"
            id="productPrice"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="productDiscount" className="block font-medium">
            Discount:
          </label>
          <input
            type="number"
            id="productDiscount"
            name="discount"
            value={product.discount}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="productImage" className="block font-medium">
            Product Image
          </label>
          <input
            type="file"
            id="productImage"
            name="photo"
            onChange={handleFileChange}
            className="border border-gray-300 p-2 rounded-md w-full"
            accept="image/*"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Update Product
        </button>
      </form>
    </div>
  );
}
