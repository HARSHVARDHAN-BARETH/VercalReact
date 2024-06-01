import React, { useEffect, useState } from "react";
const API = "https://jsonplaceholder.typicode.com/users";
import "./App.css"

function App() {
  const [users, newUser] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        newUser(data);
      }
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchUsers(API);
  }, []);

  return (
    <div className="container" >
      <h2>Data Fetched from an API</h2>
        <table className="table-responsive">
         <thead>
         <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Adress</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Comapny</th>
          </tr>
         </thead>
         <tbody>
         {users.map((user) => (
         <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
              {user.address.street}, {user.address.suite}, {user.address.city},{" "}
              {user.address.zipcode}
            </td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
            <td>{user.company.name}
            </td>
          </tr>
              ))}
         </tbody>
        </table>
  
    </div>
  );
}

export default App;
