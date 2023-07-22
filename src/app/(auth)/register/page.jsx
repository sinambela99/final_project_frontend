"use client";

import Head from "next/head";
import Link from "next/link";
import styles from "../../../styles/LoginAndRegis.module.css";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser, HiHome, HiUserGroup } from "react-icons/hi";
import { useState } from "react";
import { useFormik } from "formik";
import { RegisterValidate } from "@/lib/validate";
import LogAndRegis from "@/components/LogAndRegis";
import { useRouter } from "next/navigation";
import { register } from "@/api/register";

export default function Register() {
  const [show, setShow] = useState({ password: false, cpassword: false });
  // // Formik Hook
  // const formik = useFormik({
  //   initialValues: {
  //     username: "",
  //     email: "",
  //     password: "",
  //     cpassword: "",
  //   },
  //   validate: RegisterValidate,
  //   onSubmit,
  // });

  // async function onSubmit(values) {
  //   console.log(values);
  // }
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleRegister(e) {
    e.preventDefault();
    register(name, email, role, address, password).then((response) => {
      console.log(response);
      router.push("/login");
    });
  }

  return (
    <LogAndRegis>
      <Head>
        <title> Register Form </title>
      </Head>

      {/* <section className="w-3/4 mx-auto flex flex-col gap-10" onSubmit={formik.handleSubmit}> */}
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        {/* Title */}
        <div className="title">
          <h1 className="text-gray-800 text-3xl font-bold py-4"> Register Form </h1>
          <p className="mx-auto text-gray-400 text-sm"> Enter your information to register this website </p>
        </div>

        {/* Form */}
        {/* <form className="flex flex-col gap-3" onSubmit={formik.handleSubmit}> */}
        <form className="flex flex-col gap-3" onSubmit={handleRegister}>
          <div className={styles.input_group}>
            {/* <input type="text" name="username" placeholder="Username" className={styles.input_text} {...formik.getFieldProps("username")} /> */}
            <input type="text" name="name" placeholder="Name" className={styles.input_text} onChange={(e) => setName(e.target.value)} />
            <span className="icon flex items-center px-4">
              <HiOutlineUser size={20} />
            </span>
          </div>
          {/* {formik.errors.username && formik.touched.username ? <span className="text-red-600">{formik.errors.username}</span> : <></>} */}

          <div className={styles.input_group}>
            {/* <input type="email" name="email" placeholder="Email" className={styles.input_text} {...formik.getFieldProps("email")} /> */}
            <input type="email" name="email" placeholder="Email" className={styles.input_text} onChange={(e) => setEmail(e.target.value)} />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={20} />
            </span>
          </div>
          {/* {formik.errors.email && formik.touched.email ? <span className="text-red-600">{formik.errors.email}</span> : <></>} */}
          <div className={styles.input_group}>
            {/* <input type={`${show.password ? "text" : "password"}`} name="password" placeholder="Password" className={styles.input_text} {...formik.getFieldProps("password")} /> */}
            <input type={`${show.password ? "text" : "password"}`} name="password" placeholder="Password" className={styles.input_text} onChange={(e) => setPassword(e.target.value)} />
            <span className="icon flex items-center px-4" onClick={() => setShow({ ...show, password: !show.password })}>
              <HiFingerPrint size={20} />
            </span>
          </div>
          {/*  */}
          <div className={styles.input_group}>
            {/* <input type="email" name="email" placeholder="Email" className={styles.input_text} {...formik.getFieldProps("email")} /> */}
            <input type="text" name="address" placeholder="Address" className={styles.input_text} onChange={(e) => setAddress(e.target.value)} />
            <span className="icon flex items-center px-4">
              <HiHome size={20} />
            </span>
          </div>
          {/*  */}
          <div className={styles.input_group}>
            {/* <input type="email" name="email" placeholder="Email" className={styles.input_text} {...formik.getFieldProps("email")} /> */}
            <input type="text" name="role" placeholder="Role" className={styles.input_text} onChange={(e) => setRole(e.target.value)} />
            <span className="icon flex items-center px-4">
              <HiUserGroup size={20} />
            </span>
          </div>
          {/*  */}
          {/* {formik.errors.password && formik.touched.password ? <span className="text-red-600">{formik.errors.password}</span> : <></>} */}

          {/* <div className={styles.input_group}>
            <input type={`${show.cpassword ? "text" : "password"}`} name="cpassword" placeholder="Confirm Password" className={styles.input_text} {...formik.getFieldProps("cpassword")} />
            <span className="icon flex items-center px-4" onClick={() => setShow({ ...show, cpassword: !show.cpassword })}>
              <HiFingerPrint size={20} />
            </span>
          </div>
          {formik.errors.cpassword && formik.touched.cpassword ? <span className="text-red-600">{formik.errors.cpassword}</span> : <></>} */}

          {/* Register Button */}
          <div className="input_button">
            <button type="submit" className={styles.button}>
              Register
            </button>
          </div>
        </form>

        {/* Bottom */}
        <p className="text-center text-gray-400">
          {" "}
          Have an account?
          <span />
          <Link href={"./login"} className="text-blue-700">
            {" "}
            Login{" "}
          </Link>{" "}
        </p>
      </section>
    </LogAndRegis>
  );
}
