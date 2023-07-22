import axios from "axios";

export async function getUser(id) {
  try {
    const { data } = await axios.get(`http://localhost:8081/api/user/${id}`);
    return data.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function updateUser(id, name, address, email) {
  try {
    const { data } = await axios.put(`http://localhost:8081/api/user/${id}`, {
      name,
      address,
      email,
    });
    return data.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function deleteUser(id) {
  try {
    await axios.delete(`http://localhost:8081/api/user/${id}`);
    return;
  } catch (err) {
    console.log(err);
    return [];
  }
}
