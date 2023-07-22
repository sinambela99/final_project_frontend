import axios from "axios";

export async function login(email, password) {
  try {
    const data = await axios.post("http://localhost:8081/api/login", {
      email,
      password,
    });
    console.log(data.data);
    return data.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}
