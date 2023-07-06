import Head from "next/head";
import LogAndRegis from "../components/LogAndRegis";
import Link from "next/link";
import styles from '../styles/LoginAndRegis.module.css'
import Image from "next/image";
import google from '/public/assets/google.png'
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from "react";

export default function Login() {
  const [show, setShow] = useState(false)

  return (
    <LogAndRegis>

      <Head>
        <title> Login Form </title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        {/* Title */}
        <div className="title">
          <h1 className="text-gray-800 text-3xl font-bold py-4"> Login Form </h1>
          <p className="mx-auto text-gray-400 text-sm"> Login with your username and password </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-3">
          <div className={styles.input_group}>
            <input type="email" name="email" placeholder="Email" className={styles.input_text} />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={20} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input type={`${show ? 'text' : 'password'}`} name="password" placeholder="Password" className={styles.input_text} />
            <span className="icon flex items-center px-4" onClick={() => setShow(!show)}>
              <HiFingerPrint size={20} />
            </span>
          </div>

          {/* Login Buttons */}
          <div className="input-button">
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>
          {/* <div className="input-button">
            <button type="button" className={styles.button_custom}>
              Login with Google <Image src={google} width={20} height={20} />
            </button>
          </div> */}
          {/* <div className="input-button">
            <button type="submit" className={styles.button}>
              Login with Github
            </button>
          </div> */}
        </form>

        {/* Bottom */}
        <p className="text-center text-gray-400"> Don't have an account yet?
          <span /> <span />
          <Link href={'./register'} className="text-blue-700">
            Register
          </Link>
        </p>
      </section>

    </LogAndRegis>
  );
}
