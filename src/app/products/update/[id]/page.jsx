"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { getProductDetail } from "@/api/productDetail";
import { getProdId } from "@/api/products";

export default function UpdateProduct() {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    discount: "",
    photo: null,
  });
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    getProdId(id).then((res) => {
      setData(res);
      setProduct({
        name: res.name,
        description: res.description,
        price: res.price,
        discount: res.discount,
        photo: res.photo, // Assuming you don't want to display the photo in this form.
      });
    });
  }, [id]);

  console.log(data);
  console.log(product);

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
      formData.append("file", product.photo);
      formData.append("upload_preset", "my-uploads");

      const response = await fetch("https://api.cloudinary.com/v1_1/dv9rlshr4/image/upload", {
        method: "PUT",
        body: formData,
      });

      const data = await response.json();
      const uploadedFileURL = data.secure_url;
      console.log("File uploaded successfully:", uploadedFileURL);

      const productData = {
        name: product.name,
        description: product.description,
        price: product.price,
        discount: product.discount,
        photo: uploadedFileURL,
      };

      const serverResponse = await axios.put(`http://localhost:8081/api/product/${id}`, productData, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });

      if (serverResponse) {
        router.push("/");
      }

      console.log("Product updated successfully:", serverResponse.data);
    } catch (error) {
      console.error("Error updating product:", error);
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
          <input type="text" id="productId" name="id" defaultValue={data.id} onChange={handleChange} className="border border-gray-300 p-2 rounded-md w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="productName" className="block font-medium">
            Product Name:
          </label>
          <input type="text" id="productName" name="name" defaultValue={data?.name} onChange={handleChange} className="border border-gray-300 p-2 rounded-md w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="productDescription" className="block font-medium">
            Product Description:
          </label>
          <textarea id="productDescription" name="description" defaultValue={data?.description} onChange={handleChange} className="border border-gray-300 p-2 rounded-md w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="productPrice" className="block font-medium">
            Price:
          </label>
          <input type="number" id="productPrice" name="price" defaultValue={data?.price} onChange={handleChange} className="border border-gray-300 p-2 rounded-md w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="productDiscount" className="block font-medium">
            Discount:
          </label>
          <input type="number" id="productDiscount" name="discount" defaultValue={data?.discount} onChange={handleChange} className="border border-gray-300 p-2 rounded-md w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="productImage" className="block font-medium">
            Product Image
          </label>
          <input type="file" id="productImage" name="photo" defaultValue={data?.photo} onChange={handleFileChange} className="border border-gray-300 p-2 rounded-md w-full" accept="image/*" required />
        </div>
        <button type="submit" className="mr-4 bg-blue-500 text-white px-4 py-2 rounded-md">
          Update Product
        </button>
        <button onClick={() => router.push(`/products/delete/${id}`)} className="bg-red-500 text-white px-4 py-2 rounded-md">
          Delete Product
        </button>
      </form>
    </div>
  );
}
