export async function getProducts() {
    try {
        const { data } = await axios.get("http://localhost:8081/api/product");
        return data.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}