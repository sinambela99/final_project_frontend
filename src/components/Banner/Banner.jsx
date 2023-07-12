'use client'
import styles from '../../styles/Style.module.css'
import { Fade } from "react-awesome-reveal"
import Image from "next/image"
import { HiShoppingBag } from 'react-icons/hi'
import { Button } from '@material-tailwind/react'

export default function Banner() {
    const scrollHandler = () => {
        window.scrollTo({
            top: document.getElementById("products-feed").offsetTop - 90,
            behavior: "smooth",
        });
        //window.location.href='#products-feed'
    };

    return (
        <div className="py-12 h-screen sm:py-16 bg-white">
            <div className={`flex flex-col max-w-screen-xl mx-auto mt-10 h-full bg-white overflow-hidden gap-4 ${styles.containerBanner}`}>
                <div className="max-w-lg">
                    <Fade direction="left">
                        <div className="text-blue-700 font-extrabold">
                            <h2 className={`text-3xl leading-snug ${styles.mediaHeader2}`}>
                                Stay Home
                            </h2>
                            <h1 className={`leading-snug ${styles.mediaHeader1}`}>
                                Shop Online.
                            </h1>
                        </div>
                        <p className={`mt-6 mb-8 max-w-md font-medium text-sm text-black ${styles.mediaParagraph}`}>
                            Shop online from a wide range of genuine products whenever you
                            want 24x7.
                        </p>
                        <Button className={`${styles.mediaButton}`} onClick={scrollHandler}>
                            <HiShoppingBag className="mr-2 xl:w-6 w-5" />
                            Shop Now
                        </Button>
                    </Fade>
                </div>
                <div className="max-w-xs mx-auto md:mx-0 md:w-1/2 xl:w-auto md:max-w-lg sm:max-w-sm xl:max-w-none">
                    <Fade direction="right">
                        <Image
                            src="/assets/banner.png"
                            alt=""
                            width={600}
                            height={600}
                        />
                    </Fade>
                </div>
            </div>
        </div>
    )
}