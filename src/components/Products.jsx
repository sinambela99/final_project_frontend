import React from "react";
import axios from "axios";
import Link from "next/link";

async function getProducts() {
  try {
    const { data } = await axios.get("http://localhost:8081/api/product");
    return data.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

const Products = async () => {
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
            <Link key={product.id} href={`/product/${product.id}`}>
              <article className="h-[400px] relative flex flex-col overflow-hidden rounded-lg border cursor-pointer transition-all duration-300 hover:scale-105">
                <div className="aspect-square overflow-hidden w-full h-full">
                  <img
                    className="object-contain sm:w-full sm:h-full"
                    src={product.photo}
                    alt={product.name}
                  />
                </div>
                <div className="absolute top-0 m-2 rounded-full bg-white">
                  <p className="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                    Sale
                  </p>
                </div>
                <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                  <div className="mb-2 flex">
                    <p className="mr-3 text-sm font-semibold">
                      {product.price - product.price * product.discount}
                    </p>
                    <del className="text-xs text-gray-400">{product.price}</del>
                  </div>
                  <h3 className="mb-2 text-sm text-gray-400">{product.name}</h3>
                </div>
                <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                  <div className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
                    Add
                  </div>
                  <div className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
                    +
                  </div>
                </button>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
