'use client';
import { useState } from "react"
import Link from "next/link"
// import styles from '../styles/Home.module.css'

export default function Banner() {

    const [session, setSession] = useState(false)

    return (
        <div>
            {session ? User() : Guest()}
        </div>
    )
}

// Guest
function Guest() {
    return (
        <main className="container mx-auto text-center py-20">
            <h3 className="text-4xl font-bold"> Guest Homepage </h3>

            <div className="flex justify-center">
                <Link href={'./register'} className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-500">
                    Register
                </Link>
            </div>
        </main>
    )
}

// Authorize User
function User() {
    return (
        <main className="container mx-auto text-center py-20" >
            <h3 className="text-4xl font-bold"> Authorize User Homepage </h3>

            <div className="details">
                <h5> Unknown </h5>
                <h5> Unknown </h5>
            </div>

            <div className="flex justify-center">
                <button className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50"> Logout </button>
            </div>

            <div className="flex justify-center">
                <Link href={'./login'} className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-500">
                    Profile Page
                </Link>
            </div>
        </main>
    )
}