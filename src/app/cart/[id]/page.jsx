'use client'
import { cartById } from "@/api/cart"
import { useParams } from "next/navigation"
import React, { useEffect, useState } from "react"

const Cart = () => {
    const [data, setData] = useState([])
    const { id } = useParams()

    useEffect(() => {
        cartById(id).then((res) => {
            if (res) {
                setData(res)
            }
        })
    }, [])

    return (
        <div className="py-20">
            {data && data.Product && (
                <div key={data.id}>
                    <img src={data.Product.photo} className="h-50 w-72 object-cover rounded-t-xl" />
                    <p>{data.Product.name}</p>
                    <p>{data.Product.description}</p>
                </div>
            )}
        </div>
    )
}

export default Cart