import Head from "next/head";
import LogAndRegisLayout from "../layout/logAndRegisLayout";
import Link from "next/link";
import styles from '../styles/LoginAndRegis.module.css'
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { useState } from "react";

export default function Register() {
  const [show, setShow] = useState({ password: false, cpassword: false })

  return (
    <LogAndRegisLayout>

      <Head>
        <title> Register Form </title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        {/* Title */}
        <div className="title">
          <h1 className="text-gray-800 text-3xl font-bold py-4"> Register Form </h1>
          <p className="mx-auto text-gray-400 text-sm"> Enter your information to register this website </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-3">
          <div className={styles.input_group}>
            <input type="text" name="username" placeholder="Username" className={styles.input_text} />
            <span className="icon flex items-center px-4">
              <HiOutlineUser size={20} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input type="email" name="email" placeholder="Email" className={styles.input_text} />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={20} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input type={`${show.password ? 'text' : 'password'}`} name="password" placeholder="Password" className={styles.input_text} />
            <span className="icon flex items-center px-4" onClick={() => setShow({ ...show, password: !show.password })}>
              <HiFingerPrint size={20} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input type={`${show.cpassword ? 'text' : 'password'}`} name="cpassword" placeholder="Confirm Password" className={styles.input_text} />
            <span className="icon flex items-center px-4" onClick={() => setShow({ ...show, cpassword: !show.cpassword })}>
              <HiFingerPrint size={20} />
            </span>
          </div>

          {/* Register Button */}
          <div className="input_button">
            <button type="submit" className={styles.button}>
              Register
            </button>
          </div>
        </form>

        {/* Bottom */}
        <p className="text-center text-gray-400"> Have an account?
          <span />
          <Link href={'./login'} className="text-blue-700"> Login </Link> </p>
      </section>

    </LogAndRegisLayout>
  );
}
