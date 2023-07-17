"use client";
import { categoryById } from "@/api/category";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Category() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    categoryById(id).then((res) => {
      if (res) {
        setData(res);
      }
      //   console.log(res);
    });
  }, []);

  //   console.log(data);

  return (
    <div className="py-20">
      {data &&
        data.map((el) => (
          <div key={el.id}>
            <img src={el.Product.photo} className="h-50 w-72 object-cover rounded-t-xl" />
            <p>{el.Product.name}</p>
            <p>{el.Product.description}</p>
            <p>{el.Category.name}</p>
            <p>{el.Stock?.stock}</p>
          </div>
        ))}
    </div>
  );
}
