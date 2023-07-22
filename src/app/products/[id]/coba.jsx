"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { HiShoppingCart, HiLightningBolt } from "react-icons/hi";
import { Button } from "@material-tailwind/react";
import styles from "../../../styles/Style.module.css";
import { getProductDetail } from "@/api/productDetail";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { addToCart, getTotal } from "@/redux/features/cartSlice";
import { ToastContainer } from "react-toastify";
import Head from "next/head";
import axios from "axios";

const ProductDetail = () => {
    const [datas, setDatas] = useState([]);
    const { id } = useParams();
    const dispatch = useDispatch()
    const router = useRouter()
    const cart = useSelector((state) => state.cart)
    let quantity = 1


    //   const data = await getProductDetail(id);
    // console.log(id);

    useEffect(() => {
        getProductDetail(id).then((res) => {
            if (res) {
                setDatas(res);
            }
            // console.log(datas);
            // console.log(res);
        },
            dispatch(getTotal()));
    }, [cart, dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    const handleBuyNow = (product) => {
        dispatch(addToCart(product))
        router.push('/cart')
    }

    const addItemToCart = async (user, product, quantity) => {
        const result = await axios.get('http://localhost:8081/api/cart')
        if (result.data.length === 0) {
            const order = { UserId: user, ProductId: product, quantity: quantity }
            axios.post(`http://localhost:8081/api/cart`, order)
        }
        else {
            result.data.map((orderItem) => {
                if (a === orderItem.UserId) {
                    orderItem.quantity += 1
                    const order = { name: a, price: b, quantity: orderItem.quantity }
                }
            })
        }
    }

    return (
        <>
            <Head>
                <title> Team Huru Hara | Product Detail </title>
            </Head>

            <section className="heightFix px-6 lg:py-32 md:py-28 py-5 pb-10 bg-white">
                <div className="max-w-screen-xl py-10 flex items-center mx-auto">
                    {datas && datas.Product && (
                        <div className="flex md:flex-row flex-col md:justify-between w-full md:gap-4 gap-8">
                            <Image unoptimized src={datas.Product.photo} alt="" width={400} height={400} className="object-contain" />
                            <div className="flex-grow xl:max-w-2xl lg:max-w-xl md:max-w-md">
                                <h1 className="text-gray-900 font-bold xl:text-4xl lg:text-3xl text-2xl mb-2 capitalize">{datas.Product.name}</h1>
                                <div className="flex mb-4">
                                    <div className="flex pl-3 py-2">
                                        <h4 className="text-gray-500 capitalize font-medium">{datas.Category.name}</h4>
                                    </div>
                                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                                        <h4 className="text-gray-500">
                                            Stok Total: <span className="text-red-400">Sisa {datas.Stock.stock}</span>
                                        </h4>
                                    </span>
                                </div>
                                <p className="text-gray-500 text-justify text-sm lg:text-base my-6">{datas.Product.description}</p>
                                <p className="text-2xl font-semibold text-gray-700">{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(datas.Product.price)}</p>
                                <div className="mt-10 flex flex-col sm:gap-4 gap-2">
                                    <Button
                                        className={`${styles.mediaButton}`}
                                        onClick={() => handleAddToCart(datas)}
                                    >
                                        <HiShoppingCart className="w-4" />
                                        <span className="ml-2">Add to Cart</span>
                                    </Button>
                                    <Button
                                        className={`${styles.mediaButtonGreen}`}
                                        onClick={() => addItemToCart(datas)}
                                    >
                                        <HiLightningBolt className="w-4" />
                                        <span className="ml-2">Buy Now</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <ToastContainer />
            </section>
        </>
    );
};

export default ProductDetail;
