'use client'

import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const CategoryDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const getCategoryById = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/api/category/${id}`);
        const { data } = response;
        if (data && data.products) {
          setCategory(data);
        } else {
          throw new Error('Invalid response from API');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    if (id) {
      getCategoryById();
    }
  }, [id]);

  if (!category) {
    return <div>Loading...</div>;
  }

  if (!category.products || category.products.length === 0) {
    return <div>No products available.</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Category: {category.name}</h1>
      <div className="grid grid-cols-4 gap-4">
        {category.products.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow rounded">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetail;
