"use client";

import React, { useState } from 'react';
import axios from 'axios';

  export default function AddCategory() {
    const [categories, setProduct] = useState({
      name: '',
      description: '',
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setProduct((prevCategories) => ({ ...prevCategories, [name]: value }));
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        name: categories.name,
        description: categories.description,
      };
      const response = await axios.post('http://localhost:8081/api/category', formData);
      alert(response.data.message);
    } catch (error) {
      alert('An error occurred while adding the category.');
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Add Category</h1>
      <form onSubmit={handleSubmit} className="max-w-lg bg-white p-6 rounded-lg shadow">
        <div className="mb-4" >
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Category Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={categories.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description:</label>
          <textarea
            id="description"
            name="description"
            value={categories.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Add Category</button>
        </div>
      </form>
    </div>
  );
};

