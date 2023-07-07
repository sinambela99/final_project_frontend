'use client'
import React from 'react'
import Wrapper from '@/components/Wrapper'
import ProductDetailCarousel from '@/components/ProductDetailCarousel'

const ProductDetails = () => {
  return (
    <div className='w-full md:py-20'>
        <Wrapper>
            <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                {/*Left colomn start*/}
                <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                    <ProductDetailCarousel />   
                </div>
                {/*Left colomn start*/}

                {/* right colomn start*/}
                <div className="flex-[1] py-3">
                    {/*Product Name*/}
                    <div className="text-[34px] font-semibold mb-2"> 
                        Jordan
                    </div>

                    {/*Product Description*/}
                    <div className="text-lg font-semibold mb-5">
                        Sepatu lari
                    </div>

                    {/*Product Price*/}
                    <div className="text-lg font-semibold">
                        $ 19.000
                    </div>

                    {/*Product Size*/}
                    <div>

                    </div>

                   {/*ADD TO Cart Button START*/}
                   <div>
                    <button
                        className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform mt-10 active:scale-95 mb-3 hover:opacity-75">
                            Add to Cart
                    </button>
                    </div> 
                   {/*ADD TO Cart Button END*/}

                   {/*Product Description*/}
                   <div className="text-md mb-5">
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas consequatur!</p>
                   </div>
                    
                </div>
                {/*Right colomn start*/}
            </div>
        </Wrapper>
    </div>
  )
}

export default ProductDetails