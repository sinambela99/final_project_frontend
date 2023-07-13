'use client'
import React from "react";
import axios from "axios";
// import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Style.module.css'
import Currency from 'react-currency-formatter';
import { HiShoppingCart } from 'react-icons/hi'

async function getProducts() {
  try {
    const { data } = await axios.get("http://localhost:8081/api/product");
    return data.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

const Products = async () => {
  // const router = await useRouter()

  const products = await getProducts();

  return (
    <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20" id='products-feed'>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center mt-8">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            Shop All Products
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
          {products.map((product) => (
            <article className="h-[350px] relative flex flex-col overflow-hidden rounded-lg border transition-all duration-300 hover:scale-105">
              <div className="overflow-hidden w-full h-full">
                <Link href={`/product/${product.id}`}>
                  <Image
                    unoptimized
                    src={product.photo}
                    height={500}
                    width={500}
                    alt=""
                    className="cursor-pointer object-contain"
                    href={`/product/${product.id}`}
                  // onClick={() => router.push('/product')}
                  />
                </Link>

                {/* <img
                  className="object-contain sm:w-full sm:h-full"
                  src={product.photo}
                  alt={product.name}
                /> */}
              </div>
              <div className="absolute top-0 m-2 rounded-full bg-white">
                <p className="text-black rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide sm:py-1 sm:px-3">
                  Sale
                </p>
              </div>
              <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <h3 className={`my-3 font-medium capitalize ${styles.link}`}>
                  <Link href={`/product/${product.id}`}>
                    {product.name}
                  </Link>
                </h3>
                <p className={`text-xs mb-2 line-clamp-2 text-gray-500 ${styles.link}`}>
                  <Link href={`/product/${product.id}`}>{product.description}</Link>
                </p>
                <div className="mb-2 flex">
                  <p className="mr-3 text-sm font-semibold">
                    <Currency quantity={product.price - product.price * product.discount} currency="IDR" />
                  </p>
                  <del className="text-xs text-gray-400">
                    <Currency quantity={product.price} currency="IDR" />
                  </del>
                </div>
              </div>
              <button
                className={`h-20 flex items-center justify-center cursor-pointer rounded-sm text-sm text-white bg-gradient-to-b from-blue-500 to-blue-800 border border-blue-500`}
              // onClick={addItemToCart}
              >
                <HiShoppingCart className="w-4" />
                <span className="ml-2">Add to Cart</span>
              </button>
              {/* <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
                  Add
                </div>
                <div className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
                  +
                </div>
              </button> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
