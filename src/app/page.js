import Head from "next/head";
import Image from "next/image";
import styles from '../styles/Home.module.css'
import Link from "next/link";
import Navbar from '@/components/navbar'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Home Page </title>
      </Head>
      <Navbar />
      {Guest()}
    </div>
  )
}

// Guest
const Guest = () => {
  return (

    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold"> Guest Homepage </h3>

      <div className="flex justify-center">
        <Link href={'./login'} className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-500"></Link>
      </div>
    </main>
  )
}

// Authorize User