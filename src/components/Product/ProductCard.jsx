import axios from "axios";

import Link from 'next/link'
import React from 'react'

export async function getProducts() {
  try {
    const { data } = await axios.get("http://localhost:8081/api/product");
    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}


const ProductCard = async () => {
  const products = await getProducts();
  return (
    <>
      {products.map((product) => (
        <Link
          key={product.id}
          href="/product"
          className="transform overflow-hidden bg-neutral-100 duration-200 hover:scale-105 cursor-pointer rounded-lg"
        >
          <img className="h-48 w-96 object-contain hover:object-scale-down" src={product.photo} alt={product.imageAlt} />
          <div className="p-4 text-black/[0.9]">
            <h2 className="text-lg font-medium">{product.name}</h2>
            <p className="mr-2 text-lg font-semibold">{product.price - product.price * product.discount}</p>
            <p className="text-base font-medium line-through">{product.price}</p>
            <p className="ml-auto text-base font-medium text-green-500">
              {product.discount * 100}% OFF
            </p>
          </div>
        </Link>
      ))}
    </>
  );
}

export default ProductCard