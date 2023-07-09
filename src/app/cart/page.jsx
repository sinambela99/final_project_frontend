
import React from 'react'
import Link from 'next/link'
import Wrapper from '@/components/Wrapper/Wrapper'
import CartItem from '@/components/Cart_item/CartItem'

const Cart = () => {
  return (
    <div className='w-full md:py-20'>
        <Wrapper>
            {/*Heading and paragraph Start*/}
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                    Shopping cart
                </div>
            </div>
            {/*Heading and paragraph End*/}

        {/*CART CONTEN START*/}
        <div className="flex flex-col lg:flex-row gap-12 py-10">
            {/*Cart Item Start*/}
            <div className= "flex-[2]">
                <div className="text-lg font-bold">
                    Cart Items
                    <CartItem />
                    <CartItem />
                </div>

            </div>
            {/*Cart Item End*/}

                {/*Summary start */}
                <div className='flex-[1]'>
                    <div className="text-lg font-bold">Summary</div>

                    <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                        <div clasName="flex justify-between">
                            <div className="uppercase text-md md:text-lg font-medium text-black">
                                Subtotal
                            </div>
                            <div className="text-md md:text-lg font-medium text-black">
                                $ 19.000
                            </div>

                            <div className="text-sm md:text-md py-5 border-t mt-5">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, possimus! Iste, cumque!
                            </div>
                        </div>
                        {/*Chek out button start*/}
                        <div>
                            <button
                            className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform mt-10 active:scale-95 mb-3 hover:opacity-75">
                            Chek out
                            </button>
                        </div> 
                        {/*Chek out button end*/}
                    </div>

                </div>
                {/*Summary end */}
            </div>

        </Wrapper>
    </div>
    
  )
}

export default Cart