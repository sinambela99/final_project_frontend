"use client";

import { useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

export default function DeleteProduct() {
  const [params, setProductId] = useState("");
  const { id } = useParams();

  const handleChange = (e) => {
    setProductId(e.target.value);
  };

  const handleDelete = async () => {
    try {
      // Send a DELETE request to the backend server to delete the product by its ID
      const serverResponse = await axios.delete(
        `http://localhost:8081/api/product/${id}`
      );

      console.log("Product deleted successfully:", serverResponse.data);
      // You can add additional logic to handle successful deletion, show a success message, or refresh the product list, etc.
    } catch (error) {
      console.error("Error deleting product:", error);
      // You can add additional logic to handle errors, show an error message, etc.
    }
  };

  return (
    <div className="w-full max-w-[1000px] mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Delete Product</h1>
      <div className="mb-4">
        <label htmlFor="productId" className="block font-medium">
          Product ID:
        </label>
        <input
          type="text"
          id="productId"
          value={id}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md w-full"
          required
        />
      </div>
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-4 py-2 rounded-md"
      >
        Delete Product
      </button>
    </div>
  );
}
