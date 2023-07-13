import axios from "axios";

export async function getProductDetail(id) {
    try {
        const { data } = await axios.get(
            `http://localhost:8081/api/product-detail/${id}`
        );
        console.log(data.data)
        return data.data;
    } catch (err) {
        console.log(err);
        return [];
    }
}