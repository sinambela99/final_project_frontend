"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";


async function getCategory() {
  try {
    const { data } = await axios.get("http://localhost:8081/api/category");
    return data.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const categoriesData = await getCategory(); 
      setCategories(categoriesData);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  return (
<div className="flex flex-col h-full justify-center items-center">
  <h1 className="text-lg font-bold mb-4">Categories</h1>
  <div className="flex flex-wrap">
    {categories.map((category) => (
      <Link key={category.id} href={`/category/${category.id}`}>
        <div className="flex items-center bg-gray-200 rounded-md p-2 mr-2 mb-2">
          <h2 className="text-black">{category.name}</h2>
        </div>
          </Link>
        ))}
    </div>
    </div>
  );
};

export default CategoryPage;