import axios from "axios";

export async function getUsers() {
  try {
    const { data } = await axios.get("http://localhost:8081/api/user");
    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function User() {
  try {
    const users = await getUsers();
    console.log(users);

    return (
      <div>
        <h1>Ini users</h1>
        {users.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <h3>{user.address}</h3>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.log(error);
    return <h1>Error while fetching data.</h1>;
  }
}
