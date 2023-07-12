import Head from "next/head";
// import Image from "next/image";
// import styles from '../styles/Home.module.css'
import Header from "@/components/Header or Navbar/Header";
import Banner from "@/components/Banner/Banner";
import Products from "@/components/Products";
import RootLayout from "./layout";
import Payment from "@/components/payment/payment";

export default function Home() {
  return (
    <RootLayout>
      <div>
        <Head>
          <title> Home Page </title>
        </Head>

        <Header />
        <Banner />
        <Products />
        {/* <Payment /> */}
      </div>
    </RootLayout>
  )
}