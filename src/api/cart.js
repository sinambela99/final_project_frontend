import axios from "axios";

export async function getCart() {
    try {
        const { data } = await axios.get(`http://localhost:8081/api/cart`)
        return data.data
    } catch (err) {
        console.log(err)
        return []
    }
}

export async function cartById(params) {
    try {
        const { data } = await axios.get(`http://localhost:8081/api/cart/${params}`)
        return data.data
    } catch (err) {
        return []
    }
}
