"use client";
import React from "react";
import { getProducts } from "@/api/products";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import styles from "../../styles/Style.module.css";
import { HiShoppingCart } from "react-icons/hi";

export default function Products() {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getProducts().then((res) => {
      if (res) {
        setProducts(res);
      }
    });
  }, []);

  return (
    <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-5" id="products-feed">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center mt-8 py-10">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">Shop All Products</h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
          {products.map((product) => (
            <Fade direction="down" key={product.id}>
              <article className="h-[350px] relative flex flex-col overflow-hidden rounded-lg border transition-all duration-300 hover:scale-105">
                <div className="overflow-hidden w-full h-full">
                  <Image unoptimized src={product.photo} height={500} width={500} alt="" className="cursor-pointer object-contain" onClick={() => router.push(`/products/${product.id}`)} />
                </div>
                <div className="absolute top-0 m-2 rounded-full bg-white">
                  <p className="text-black rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide sm:py-1 sm:px-3">Sale</p>
                </div>
                <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                  <h3 className={`my-3 font-medium capitalize ${styles.link}`}>
                    <Link href={`/products/${product.id}`}>{product.name}</Link>
                  </h3>
                  <p className={`text-xs mb-2 line-clamp-2 text-gray-500 ${styles.link}`}>
                    <Link href={`/products/${product.id}`}>{product.description}</Link>
                  </p>
                  <div className="mb-2 flex">
                    <p className="mr-3 text-sm font-semibold">{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(product.price - product.price * product.discount)}</p>
                    <del className="text-xs text-gray-400">{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(product.price)}</del>
                  </div>
                </div>
                <button
                  className={`h-20 flex items-center justify-center cursor-pointer rounded-sm text-sm text-white bg-gradient-to-b from-blue-500 to-blue-800 border border-blue-500`}
                  // onClick={addItemToCart}
                >
                  <HiShoppingCart className="w-4" />
                  <span className="ml-2">Add to Cart</span>
                </button>
              </article>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
