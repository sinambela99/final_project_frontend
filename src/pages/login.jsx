import Head from "next/head";
import LogAndRegis from "../components/LogAndRegis";
import Link from "next/link";
import styles from '../styles/LoginAndRegis.module.css'
import Image from "next/image";
import google from '/public/assets/google.png'
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from "react";
import { useFormik } from "formik";
import LoginValidate from "../lib/validate";

export default function Login() {
  const [show, setShow] = useState(false)
  // Formik Hook
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: LoginValidate,
    onSubmit
  })

  // console.log(formik.errors)

  async function onSubmit(values) {
    console.log(values)
  }

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
        <form className="flex flex-col gap-3" onSubmit={formik.handleSubmit}>
          <div className={`${styles.input_group} ${formik.errors.email && formik.touched.email ? 'border-red-600' : ''}`}>
            <input type="email" name="email" placeholder="Email" className={styles.input_text} {...formik.getFieldProps('email')} />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={20} />
            </span>
          </div>
          {/* {formik.errors.email && formik.touched.email ? <span className="text-red-600">{formik.errors.email}</span> : <></>} */}

          <div className={`${styles.input_group} ${formik.errors.password && formik.touched.password ? 'border-red-600' : ''}`}>
            <input type={`${show ? 'text' : 'password'}`} name="password" placeholder="Password" className={styles.input_text} {...formik.getFieldProps('password')} />
            <span className="icon flex items-center px-4" onClick={() => setShow(!show)}>
              <HiFingerPrint size={20} />
            </span>
          </div>
          {/* {formik.errors.password && formik.touched.password ? <span className="text-red-600">{formik.errors.password}</span> : <></>} */}

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
