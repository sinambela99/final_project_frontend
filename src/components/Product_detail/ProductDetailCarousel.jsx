import axios from "axios";
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export async function getProduct_detail() {
  try {
    const { data } = await axios.get("http://localhost:8081/api/product-detail");
    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

const ProductDetailCarousel = async () => {
  const products = await getProduct_detail();
  return (
    <div className='text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]'>
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className='productCarousel'
      >
        <img src="photo" alt="product 1" />

      </Carousel>
    </div>
  )
}

export default ProductDetailCarousel