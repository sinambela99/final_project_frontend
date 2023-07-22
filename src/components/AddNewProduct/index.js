'use client'

import { useState } from 'react';
import axios from 'axios';

export default function AddProduct() {
    const [productName, setProductName] = useState('');
    const [categoryProduct, setCategoryProduct] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('productName', productName);
        formData.append('categoryProduct', categoryProduct);
        formData.append('productDescription', productDescription);
        formData.append('productPrice', productPrice);
        formData.append('productImage', productImage);

        axios.post('http://localhost:8081/', formData)
            .then(response => {
                console.log('Product added successfully:', response.data);
                setProductName('');
                setCategoryProduct('');
                setProductDescription('');
                setProductPrice('');
                setProductImage(null);
            })
            .catch(error => {
                console.error('Error adding product:', error);
            });
    };
    return (
        <div className="w-full max-w-[1000px] mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="productName" className="block font-medium">
                        Product Name:
                    </label>
                    <input
                        type="text"
                        id="productName"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="categoryProduct" className="block font-medium">
                        Product Category:
                    </label>
                    <input
                        type="text"
                        id="categoryProduct"
                        value={categoryProduct}
                        onChange={(e) => setCategoryProduct(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="productDescription" className="block font-medium">
                        Product Description:
                    </label>
                    <textarea
                        id="productDescription"
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="productPrice" className="block font-medium">
                        Price:
                    </label>
                    <input
                        type="number"
                        id="productPrice"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="productImage" className="block font-medium">
                        Product Image
                    </label>
                    <input
                        type="file"
                        id="productImage"
                        onChange={(e) => setProductImage(e.target.files[0])}
                        className="border border-gray-300 p-2 rounded-md w-full"
                        accept="image/*"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
}