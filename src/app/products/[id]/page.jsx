// import React from "react";

// const page = () => {
//   return (
//     <div>
//       <h1>hi</h1>
//     </div>
//   );
// };

// export default page;

"use client";

import axios from "axios";
import { useParams } from "next/navigation";
// import Header from "./Header or Navbar/Header";
import Image from "next/image";
import { HiShoppingCart, HiLightningBolt } from "react-icons/hi";
import { Button } from "@material-tailwind/react";
import styles from "../../../styles/Style.module.css";

// export async function getProductDetail(id) {
//   try {
//     const data = await axios.get(
//       `http://localhost:8081/api/product-detail/${id}`
//     );
//     return data.data.data;
//   } catch (err) {
//     throw new Error("Failed to fetch data");
//   }
// }

const ProductDetail = () => {
  //   const { id } = useParams();
  //   const data = await getProductDetail(id);

  return (
    <section className="heightFix px-6 lg:py-32 md:py-28 py-5 pb-10 bg-white">
      <div className="max-w-screen-xl py-10 flex items-center mx-auto">
        <div className="flex md:flex-row flex-col md:justify-between w-full md:gap-4 gap-8">
          <Image
            unoptimized
            //   src={data.Product.photo}
            src="https://intercomp.com.mt/wp-content/uploads/2023/06/58026-1.jpg"
            alt=""
            width={400}
            height={400}
            className="object-contain"
          />
          <div className="flex-grow xl:max-w-2xl lg:max-w-xl md:max-w-md">
            <h1 className="text-gray-900 font-bold xl:text-4xl lg:text-3xl text-2xl mb-2 capitalize">
              {/* {data.Product.name} */}
              samsung
            </h1>
            <div className="flex mb-4">
              <div className="flex pl-3 py-2">
                <h4 className="text-gray-500 capitalize font-medium">
                  {/* {data.Category.name} */}
                  pempem
                </h4>
              </div>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                <h4 className="text-gray-500">
                  Stok Total:{" "}
                  <span className="text-red-400">
                    {/* Sisa {data.Stock.stock} */}
                    sisa 20
                  </span>
                </h4>
              </span>
            </div>
            <p className="text-gray-500 text-justify text-sm lg:text-base my-6">
              {/* {data.Product.description} */}
              hahohaoh
            </p>
            <p className="text-2xl font-semibold text-gray-700">
              {/* {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(data.Product.price)} */}
              10000
            </p>
            <div className="mt-10 flex flex-col sm:gap-4 gap-2">
              <Button
                className={`${styles.mediaButton}`}
                // onClick={addItemToCart}
              >
                <HiShoppingCart className="w-4" />
                <span className="ml-2">Add to Cart</span>
              </Button>
              <Button
                className={`${styles.mediaButtonGreen}`}
                // onClick={buyNow}
              >
                <HiLightningBolt className="w-4" />
                <span className="ml-2">Buy Now</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
