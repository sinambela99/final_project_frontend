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

const Category = () => {
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
    <div className="flex flex-col">
      <h1 className="text-lg font-bold mb-4">Categories</h1>
      <ul className="space-y-2">
        {categories.map((category) => (
          <Link key={category.name} href={`/category/${category.name}`}>
            <div>
              <h2>{category.name}</h2>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Category;
