"use client";

import Head from "next/head";
import Link from "next/link";
import styles from "../../../styles/LoginAndRegis.module.css";
import Image from "next/image";
import google from "/public/assets/google.png";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import LoginValidate from "../../../lib/validate";
import LogAndRegis from "@/components/LogAndRegis";
import { useRouter } from "next/navigation";
import { login } from "@/api/login";

export default function Login() {
  const [show, setShow] = useState(false);
  // Formik Hook
  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     password: "",
  //   },
  //   validate: LoginValidate,
  //   onSubmit,
  // });

  // // console.log(formik.errors)

  // async function onSubmit(values) {
  //   console.log(values);
  // }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [items, setItems] = useState([]);
  const router = useRouter();

  function handleLogin(e) {
    e.preventDefault();
    login(email, password).then((response) => {
      if (response) {
        setItems(response);
        router.push("/");
      }
      console.log(response);
    });
  }

  useEffect(() => {
    localStorage.setItem("access_token", items.access_token);
    console.log(items.access_token);
  }, [items]);

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
        {/* <form className="flex flex-col gap-3" onSubmit={formik.handleSubmit}> */}
        <form className="flex flex-col gap-3" onSubmit={handleLogin}>
          {/* <div className={`${styles.input_group} ${formik.errors.email && formik.touched.email ? "border-red-600" : ""}`}>
            <input type="email" name="email" placeholder="Email" className={styles.input_text} {...formik.getFieldProps("email")} /> */}
          <div className={styles.input_group}>
            <input type="email" name="email" placeholder="Email" className={styles.input_text} onChange={(e) => setEmail(e.target.value)} />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={20} />
            </span>
          </div>
          {/* {formik.errors.email && formik.touched.email ? <span className="text-red-600">{formik.errors.email}</span> : <></>} */}

          {/* <div className={`${styles.input_group} ${formik.errors.password && formik.touched.password ? "border-red-600" : ""}`}>
            <input type={`${show ? "text" : "password"}`} name="password" placeholder="Password" className={styles.input_text} {...formik.getFieldProps("password")} /> */}
          <div className={styles.input_group}>
            <input type={`${show ? "text" : "password"}`} name="password" placeholder="Password" className={styles.input_text} onChange={(e) => setPassword(e.target.value)} />
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
        <p className="text-center text-gray-400">
          {" "}
          Don't have an account yet?
          <span /> <span />
          <Link href={"./register"} className="text-blue-700">
            Register
          </Link>
        </p>
      </section>
    </LogAndRegis>
  );
}
