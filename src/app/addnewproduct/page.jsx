"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    discount: "",
    photo: null,
    stock: "",
    CategoryId: "",
  });

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    try {
      const { data } = await axios.get("http://localhost:8081/api/category");
      setCategories(data.data);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProduct((prevProduct) => ({ ...prevProduct, photo: file }));
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("file", product.photo);
      formData.append("upload_preset", "my-uploads");

      const response = await fetch("https://api.cloudinary.com/v1_1/dv9rlshr4/image/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      const uploadedFileURL = data.secure_url;

      const productData = {
        name: product.name,
        description: product.description,
        price: product.price,
        discount: product.discount,
        photo: uploadedFileURL,
        stock: product.stock,
        CategoryId: selectedCategory,
      };

      const serverResponse = await axios.post("http://localhost:8081/api/product", productData, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });

      console.log("Product added successfully:", serverResponse.data);
    } catch (error) {
      console.error("Error adding product:", error);
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
          <input type="text" id="productName" name="name" value={product.name} onChange={handleChange} className="border border-gray-300 p-2 rounded-md w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="productDescription" className="block font-medium">
            Product Description:
          </label>
          <textarea id="productDescription" name="description" value={product.description} onChange={handleChange} className="border border-gray-300 p-2 rounded-md w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="productPrice" className="block font-medium">
            Price:
          </label>
          <input type="number" id="productPrice" name="price" value={product.price} onChange={handleChange} className="border border-gray-300 p-2 rounded-md w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="productDiscount" className="block font-medium">
            Discount:
          </label>
          <input type="number" id="productDiscount" name="discount" value={product.discount} onChange={handleChange} className="border border-gray-300 p-2 rounded-md w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="productImage" className="block font-medium">
            Product Image:
          </label>
          <input type="file" id="productImage" name="photo" onChange={handleFileChange} className="border border-gray-300 p-2 rounded-md w-full" accept="image/*" required />
        </div>

        <div className="mb-4">
          <label htmlFor="productStock" className="block font-medium">
            Stock:
          </label>
          <input type="number" id="productStock" name="stock" value={product.stock} onChange={handleChange} className="border border-gray-300 p-2 rounded-md w-full" required />
        </div>

        <div className="mb-4">
          <label htmlFor="productCategoryId" className="block font-medium">
            Category:
          </label>
          <select id="productCategoryId" name="categoryId" value={selectedCategory} onChange={handleCategoryChange} className="border border-gray-300 p-2 rounded-md w-full" required>
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Add Product
        </button>
      </form>
    </div>
  );
}
