"use client";
import { getCategory } from "@/api/category";
import { useState, useEffect } from "react";
import { HiAdjustments, HiShoppingCart } from "react-icons/hi";
import Link from "next/link";

export default function CategoryAdj() {
    const [categories, setCategories] = useState([])

    const fetchCategories = async () => {
        try {
            const categoriesData = await getCategory();
            setCategories(categoriesData);
        } catch (error) {
            console.error("Failed to fetch categories:", error);
        }
    };

    useEffect(() => {
        fetchCategories()
    }, []);

    return (
        <div className="flex items-center gap-2 mx-auto hideScrollBar capitalize text-sm font-medium">
            <div>
                <HiAdjustments className="w-6" />
            </div>
            {categories.map((category) => (
                <div className={`py-2 px-2 bg-white text-center whitespace-nowrap rounded hover:bg-blue-light hover:text-white transition-all cursor-pointer ease-in-out duration-200 shadow` } key={category.id}>
                    <Link href={`/category/${category.id}`}>
                        <h2 className="text-black">{category.name}</h2>
                    </Link>
                </div>
            ))}
        </div>
    )
}