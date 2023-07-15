"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
// import Header from "./Header or Navbar/Header";

export async function getCategoryDetail(id) {
  try {
    const { data } = await axios.get(
      `http://localhost:8081/api/category/${id}`
    );
    return data;
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

const CategoryDetail = () => {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCategoryDetail(id);
        setCategory(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (!category) {
    return <div>Loading...</div>;
  }

  if (!category.length) {
    return <div>No product available.</div>;
  }
  
  return (
    <>
      <div>
        <div>
        {category.map((item) => (
            <div key={item.id}>
              <h3>Product: {item.Product ? item.Product.name : ""}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryDetail;
