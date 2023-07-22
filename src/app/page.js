import Head from "next/head";
// import Image from "next/image";
// import styles from '../styles/Home.module.css'
import Header from "@/components/Header or Navbar/Header";
import Banner from "@/components/Banner/Banner";

import RootLayout from "./layout";
import Payment from "@/components/payment/payment";
import Products from "./products/page";

import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <ToastContainer />
      <Banner />
      <Products />
    </>
  );
}
