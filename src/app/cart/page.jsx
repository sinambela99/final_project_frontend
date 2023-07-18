'use client'
import { getCart } from "@/api/cart"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Head from "next/head"
import Link from "next/link"
// import { Button } from "@material-tailwind/react"
import Image from "next/image"
import { Fade } from "react-awesome-reveal"
import { HiMinus, HiPlus, HiCreditCard } from "react-icons/hi"
import styles from '@/styles/Style.module.css'
import { Button } from "@material-tailwind/react"

export default function Carts() {
    const [carts, setCarts] = useState([])
    const router = useRouter()

    useEffect(() => {
        getCart().then((res) => {
            if (res) {
                setCarts(res)
            }
        })
    }, [])

    return (
        <>
            <Head>
                <title> Cart </title>
            </Head>
            <div className="bg-gray-100 py-20 md:px-6 h-full">
                <main className="max-w-screen-xl mx-auto">
                    <div className=' my-6 shadow rounded-sm'>
                        <div className='flex flex-col md:p-8 p-5 bg-white'>
                            <h1 className='sm:text-2xl text-xl font-semibold border-b-2 border-gray-200 pb-4 text-gray-700'>
                                Shopping Cart
                            </h1>
                            <div className='flex justify-between items-center py-6'>
                                <span className='font-medium text-lg text-blue-500'>
                                    Items
                                    <span className='font-semibold text-xl ml-2'>
                                        (Jumlah item yang berbeda)
                                    </span>
                                </span>
                                {/* <Button className={`${styles.mediaButtonRed} xs:px-10`}>
                                    Empty Cart
                                </Button> */}
                            </div>
                            {carts && carts.map((cart) => (
                                <Fade direction="up" key={cart.id}>
                                    <div className="block bg-white py-6 sm:grid sm:grid-cols-5">
                                        <div className="text-center sm:text-left my-auto">
                                            <Image
                                                unoptimized
                                                src={cart.Product.photo}
                                                width={150}
                                                height={150}
                                                className="cursor-pointer object-contain"
                                                alt={cart.Product.name}
                                            // onClick={() => router.push(`/products/${product.id}`)}
                                            />
                                        </div>

                                        {/* Middle */}
                                        <div className="col-span-3 sm:p-4 mt-2 mb-6 sm:my-0">
                                            <h4 className="mb-3 link lg:text-xl md:text-lg text-base capitalize font-medium">
                                                {cart.Product.name}
                                            </h4>
                                            <p className="lg:text-sm text-xs my-2 mb-4 line-clamp-3 link text-gray-500">
                                                {cart.Product.description}
                                            </p>
                                            <span className="font-medium md:text-base text-sm">
                                                jumlah × {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(cart.Product.price)} =
                                                <span className="font-bold text-gray-700 mx-1">
                                                    Harga Total
                                                </span>
                                            </span>
                                        </div>

                                        {/* Buttons on the right of the products */}
                                        <div className="flex flex-col space-y-4 my-auto justify-self-end">
                                            <div className="flex justify-between">
                                                <Button
                                                    className={`${styles.button} sm:p-1`}
                                                // onClick={decQty}
                                                // disabled={disabled}
                                                >
                                                    <HiMinus className="h-5" />
                                                </Button>
                                                <div className="p-2 whitespace-normal sm:p-1 sm:whitespace-nowrap">
                                                    <span className="font-bold md:text-base text-sm text-gray-700">
                                                        jumlah
                                                    </span>
                                                </div>
                                                <Button
                                                    className={`${styles.button} sm:p-1`}
                                                // onClick={incQty}
                                                // disabled={disabled}
                                                >
                                                    <HiPlus className="h-5" />
                                                </Button>
                                            </div>
                                            <Button
                                                className={`${styles.button} py-2 lg:px-10 md:px-8 px-6 `}
                                            // onClick={removeItemFromCart}
                                            // disabled={disabled}
                                            >
                                                Remove
                                            </Button>
                                        </div>
                                    </div>
                                </Fade>
                            ))}

                        </div>
                    </div>
                    <div className="flex flex-col bg-white md:p-10  py-8 px-6 shadow-md rounded-md md:text-xl sm:text-lg text-base my-10">
                        <h2 className="whitespace-nowrap font-semibold overflow-x-auto hideScrollBar">
                            Subtotal (jumlah items) :
                            <span className="font-bold text-red-500 mx-2">
                                total harga
                            </span>
                        </h2>

                        <Button
                            role="link"
                            className={`${styles.button} mt-6 flex items-center justify-center lg:text-lg text-base py-2`}
                        // onClick={!disabled ? createCheckoutSession : () => { }}
                        // disabled={disabled}
                        >
                            <HiCreditCard className="sm:w-6 w-5" />
                            <span className="ml-2"> Proceed to checkout </span>
                        </Button>
                    </div>
                </main>
            </div>
        </>
    )
}