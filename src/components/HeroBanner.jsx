'use client'

import React, { useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { BiArrowBack } from 'react-icons/bi';

function HeroBanner() {
  useEffect(() => {
    // Kode yang akan dijalankan hanya pada sisi klien
    console.log('Kode dijalankan di sisi klien');
  }, []);

  return (
    <div className="relative text-white text-[20px] w-[80%] mx-auto my-14">
      <Carousel 
        autoPlay={true} 
        interval={2000} 
        showStatus={false} 
        showThumbs={false}
        renderArrowPrev={(clickHandler, hasPrec) => (
          <div
            onClick={clickHandler}
            className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="text-sm md:text-lg" />
          </div>
        )}

        renderArrowNext={(clickHandler, hasNext) => (
                    <div
                        onClick={clickHandler}
                        className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                    >
                        <BiArrowBack className="rotate-180 text-sm md:text-lg" />
                    </div>
                )}
      >
        <div>
          <img src="slide-2.png" className='aspect-[16/10] md:aspect-auto object-cover' />
          <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop now
          </div>
        </div>
        <div>
          <img src="slide-3.png" className='aspect-[16/10] md:aspect-auto object-cover' />
          <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop now
          </div>
        </div>
        <div>
          <img src="slide-1.png" className='aspect-[16/10] md:aspect-auto object-cover' />
          <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop now
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default HeroBanner;



