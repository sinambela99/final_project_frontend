"use client";
import { categoryById } from "@/api/category";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../../styles/Style.module.css";

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
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-4 lg:mt-4 py-20">
      {data &&
        data.map((el) => (
          <div key={el.id}>
           <article className="h-[350px] relative flex flex-col overflow-hidden rounded-lg border transition-all duration-300 hover:scale-105">
            <div className="overflow-hidden w-full h-full">
                  <Image unoptimized src={el.Product.photo} height={100} width={180} alt="" className="cursor-pointer object-center" style={{ margin: "auto",}}/>
                </div>
            <div className="absolute top-0 m-2 rounded-full bg-white">
                  <p className="text-black rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide sm:py-1 sm:px-3">Sale</p>
                </div>
                <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
            <h3 className={`my-3 font-medium capitalize ${styles.link}`}>
            <Link href={`/products/${el.Product.id}`}>
              {el.Product.name}
            </Link>
            </h3>
            <p className={`text-xs mb-2 line-clamp-2 text-gray-500 ${styles.link}`}>
              Description: {el.Product.description}
            </p>
            <h3 className={`my-1 font-medium capitalize`}>
            <p>{el.Category.name}</p>
            </h3>
            <h3 className={`my-1 font-medium capitalize`}>
            <p>Stock: {el.Stock?.stock}</p>
            </h3>
            </div>
            </article>
           </div>
        ))}
     </div>
    </div>
  );
}
