"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import Header from "./Header or Navbar/Header";
import Image from "next/image";

export async function getProductDetail(id) {
  try {
    const data = await axios.get(
      `http://localhost:8081/api/product-detail/${id}`
    );
    return data.data.data;
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

const ProductDetail = async () => {
  const { id } = useParams();
  const data = await getProductDetail(id);

  return (
    <>
      <Header />
      <section className="heightFix px-6 lg:py-32 md:py-28 py-5 pb-10 bg-white">
        <div className="max-w-screen-xl py-10 flex items-center mx-auto">
          <div className="flex md:flex-row flex-col md:justify-between w-full md:gap-4 gap-8">
            <Image
              unoptimized
              src={data.Product.photo}
              alt=""
              width={400}
              height={400}
              className="object-contain"
            />
            <div className="flex-grow xl:max-w-2xl lg:max-w-xl md:max-w-md">
              <h1 className="text-gray-900 font-bold xl:text-4xl lg:text-3xl text-2xl mb-2 capitalize">
                {data.Product.name}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center text-blue-gray-500 capitalize mb-4 font-medium" >
                  {data.Category.name}
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <h4 className="text-gray-500">
                    Stok Total:{" "}
                    <span className="text-red-400">
                      Sisa {data.Stock.stock}
                    </span>
                  </h4>
                </span>
              </div>
              <p className="leading-relaxed">{data.Product.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <h1>Atur Jumlah</h1>
                <div>
                  <button>-</button>
                  <input type="number" />
                  <button>+</button>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Rp {data.Product.price}
                </span>
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Add to Cart
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;