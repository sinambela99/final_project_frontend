import axios from "axios";

export async function register(name, email, role, address, password) {
  try {
    const data = await axios.post("http://localhost:8081/api/register", {
      name,
      email,
      role,
      address,
      password,
    });
    console.log(data.data);
    return data.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}
