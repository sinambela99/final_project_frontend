'use client'
import { getCart } from "@/api/cart"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useSelector, useDispatch } from "react-redux"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { Fade } from "react-awesome-reveal"
import { HiMinus, HiPlus, HiCreditCard } from "react-icons/hi"
import styles from '@/styles/Style.module.css'
import { Button } from "@material-tailwind/react"
import dynamic from "next/dynamic"
import { addToCart, emptyCart, getTotal, removeFromCart, updateCart } from "@/redux/features/cartSlice"
import { ToastContainer } from "react-toastify";

const Carts = () => {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTotal())
    }, [cart, dispatch])

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem))
    }

    const handleDecreaseCart = (cartItem) => {
        dispatch(updateCart(cartItem))

    }

    const handleIncreaseCart = (cartItem) => {
        dispatch(addToCart(cartItem))
    }

    const handleClearAllCart = () => {
        dispatch(emptyCart())
    }


    if (cart.cartItems.length === 0) {
        return (
            <div className="bg-gray-100 py-10 md:px-6 h-screen">
                <main className="max-w-screen-xl mx-auto">
                    <div className="flex items-center justify-center w-full  px-6 lg:py-20 sm:py-10 py-4">
                        <div className="text-center md:max-w-none sm:w-auto mx-auto max-w-xs w-4/5">
                            <Image
                                unoptimized
                                src="/assets/banner.png"
                                alt=""
                                width={350}
                                height={350}
                                className="cursor-pointer object-contain"
                            />
                            <h3 className="lg:text-2xl text-xl font-medium mt-4">
                                Your Cart is Empty
                            </h3>
                        </div>
                    </div>
                </main>
            </div>

        )
    }

    return (
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
                                    {cart.cartItems.length}
                                </span>
                            </span>
                            <Button className={`${styles.mediaButtonRed} xs:px-10`}
                                onClick={() => handleClearAllCart()} >
                                Empty Cart
                            </Button>
                        </div>

                        {cart.cartItems?.map(cartItem => (
                            <Fade direction="up" key={cartItem.id}>
                                <div className="block bg-white py-6 sm:grid sm:grid-cols-5">
                                    <div className="text-center sm:text-left my-auto">
                                        <Image
                                            unoptimized
                                            src={cartItem.Product.photo}
                                            width={150}
                                            height={150}
                                            className="cursor-pointer object-contain"
                                            alt={cartItem.Product.name}
                                        />
                                    </div>

                                    {/* Middle */}
                                    <div className="col-span-3 sm:p-4 mt-2 mb-6 sm:my-0">
                                        <h4 className="mb-3 link lg:text-xl md:text-lg text-base capitalize font-medium">
                                            {cartItem.Product.name}
                                        </h4>
                                        <p className="lg:text-sm text-xs my-2 mb-4 line-clamp-3 link text-gray-500">
                                            {cartItem.Product.description}
                                        </p>
                                        <span className="font-medium md:text-base text-sm">
                                            {cartItem.cartQuantity} × {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(cartItem.Product.price)} =
                                            <span className="font-bold text-gray-700 mx-1">
                                                {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(cartItem.Product.price * cartItem.cartQuantity)}
                                            </span>
                                        </span>
                                    </div>

                                    {/* Buttons on the right of the products */}
                                    <div className="flex flex-col space-y-4 my-auto justify-self-end">
                                        <div className="flex justify-between">
                                            <Button
                                                className={`${styles.button} sm:p-1`}
                                                onClick={() => handleDecreaseCart(cartItem)}
                                            // disabled={disabled}
                                            >
                                                <HiMinus className="h-5" />
                                            </Button>
                                            <div className="p-2 whitespace-normal sm:p-1 sm:whitespace-nowrap">
                                                <span className="font-bold md:text-base text-sm text-gray-700">
                                                    {cartItem.cartQuantity}
                                                </span>
                                            </div>
                                            <Button
                                                className={`${styles.button} sm:p-1`}
                                                onClick={() => handleIncreaseCart(cartItem)}
                                            // disabled={disabled}
                                            >
                                                <HiPlus className="h-5" />
                                            </Button>
                                        </div>
                                        <Button
                                            className={`${styles.button} py-2 lg:px-10 md:px-8 px-6 `}
                                            onClick={() => handleRemoveFromCart(cartItem)}
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
                        Subtotal ({cart.cartItems.length} items) :
                        <span className="font-bold text-red-500 mx-2">
                            {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(cart.cartTotalAmount)}
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
            <ToastContainer />
        </div>
    )
}

export default dynamic(() => Promise.resolve(Carts), { ssr: false })