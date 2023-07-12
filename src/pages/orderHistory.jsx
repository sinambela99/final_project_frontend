import '../app/globals.css'
import Head from 'next/head'
import { Card, Typography } from '@material-tailwind/react'

export default function OrderHistory() {
    const tableHead = ['', '', '', '']

    return (
        <>
            <Head>
                <title> Order History </title>
            </Head>
            <div className='h-screen bg-white'>
                <h1 className='text-red-400'> Ini Page Order History </h1>
            </div>
        </>
    )
}