"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-commerce',
  description: 'E-commerce',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <div className={inter.className}>
        <Header />
        {children}
        <Footer />
      </div>
    </html>
  )
}
