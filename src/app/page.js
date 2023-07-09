import Head from "next/head";
// import Image from "next/image";
// import styles from '../styles/Home.module.css'
import Header from "@/components/Header or Navbar/Header";
// import Banner from "@/components/Banner/Banner";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Home Page </title>
      </Head>

      <Header />
      {/* <Banner /> */}
    </div>
  )
}