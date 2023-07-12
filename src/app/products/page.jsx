import axios from "axios";
import styles from "../../styles/LoginAndRegis.module.css";
import Link from "next/link";
// import { getProducts } from "@/api/products";

export async function getProducts() {
  try {
    const { data } = await axios.get("http://localhost:8081/api/product");
    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function Products() {
  const products = await getProducts();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">All Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              href={product.href}
              className="group cursor-pointer"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 ">
                <img
                  src={product.photo}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
              <p className="mt-1 text-lg font-medium text-gray-900">
                Discount {product.discount * 100}%
              </p>
              <p className="mt-1 text-lg font-medium text-gray-900">
                Rp {product.price - product.price * product.discount}
              </p>
              <div className="input-button">
                <a href="/">
                  <button type="submit" className={styles.button}>
                    Beli
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
