import axios from "axios";

export async function getProducts() {
  try {
    const { data } = await axios.get("http://localhost:8081/api/product");
    return data.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function getProdId(id) {
  try {
    const { data } = await axios.get(`http://localhost:8081/api/product/${id}`, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });
    return data.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}
