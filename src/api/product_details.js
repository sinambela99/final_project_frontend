import axios from 'axios';

export default async function handler(req,res) {
    const { id } = req.query;
  
    try {
      const response = await axios.get("http://localhost:8081/api/product-detail/:id");
      const product_detail = response.data;
      res.status(200).json(product);
    } catch (error) {
      console.log('Error fetching product:', error);
      res.status(500).json({ error: 'Failed to fetch product' });
    }
  }