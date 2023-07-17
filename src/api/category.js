import axios from "axios";

export async function categoryById(params) {
  try {
    const { data } = await axios.get(`http://localhost:8081/api/category/${params}`);
    // console.log(data.data);
    return data.data;
  } catch (error) {
    // console.log(error);
    return [];
  }
}
