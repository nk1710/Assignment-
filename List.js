import React, { useEffect, useState } from "react";
import { fetchUsers, createUser  } from "../api";
import UserForm from "./User Form"; // Ensure the filename matches

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getUsers();
  }, []);

  const handleAddUser  = async (newUser ) => {
    const createdUser  = await createUser (newUser );
    setUsers([...users, createdUser ]);
    setShowForm(false);
  };

  return (
    <div>
      <h2>User Management</h2>
      <button onClick={() => setShowForm(true)}>Add User</button>
      {showForm && <User Form onSubmit={handleAddUser } />}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.role} - {user.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;