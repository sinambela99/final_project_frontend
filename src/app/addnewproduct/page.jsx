'use client'

import { useState } from 'react';
import axios from 'axios';
import { CloudinaryContext, Image, Transformation } from 'cloudinary-react'; // Import Cloudinary React SDK


export default function AddProduct() {
    const [product, setProduct] = useState({
      name: '',
      description: '',
      price: '',
      discount: '',
      photo: null,
    //   category: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    };
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setProduct((prevProduct) => ({ ...prevProduct, photo: file }));
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const formData = new FormData();
          formData.append('file', product.photo); // Ganti 'file' dengan nama atribut yang sesuai dengan server Anda
          formData.append('upload_preset', 'my-uploads'); // Ganti 'YOUR_UPLOAD_PRESET' dengan upload preset Anda di Cloudinary
      
          const response = await fetch(
           'https://api.cloudinary.com/v1_1/dv9rlshr4/image/upload',
            {
              method: 'POST',
              body: formData,
            }
          );
      
          const data = await response.json();
          // Dapatkan URL berkas yang diunggah dari data respons Cloudinary
          const uploadedFileURL = data.secure_url;
          // Gunakan URL ini sesuai kebutuhan Anda (misalnya, simpan URL di state untuk digunakan di bagian lain komponen)
          console.log('File uploaded successfully:', uploadedFileURL);
      
          // Lanjutkan dengan mengirim data produk beserta URL gambar ke server menggunakan axios atau cara yang sesuai dengan aplikasi Anda
          const productData = {
            name: product.name,
            description: product.description,
            price: product.price,
            discount: product.discount,
            photo: uploadedFileURL,
          };
      
          const serverResponse = await axios.post('http://localhost:8081/api/product', productData);
      
          console.log('Product added successfully:', serverResponse.data);
          // Anda dapat menambahkan logika lain untuk menangani keberhasilan penambahan produk
        } catch (error) {
          console.error('Error adding product:', error);
          // Anda dapat menambahkan logika lain untuk menangani kesalahan
        }
      };
      
    return (
        <div className="w-full max-w-[1000px] mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
          <form onSubmit={handleSubmit}>
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
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Add Product
            </button>
          </form>
        </div>
      );
    }