import axios from "axios";

export async function getCategoryDetail(id) {
    try {
      const { data } = await axios.get(
        `http://localhost:8081/api/category/${id}`
      );
      return data;
    } catch (err) {
      throw new Error("Failed to fetch data");
    }
  }