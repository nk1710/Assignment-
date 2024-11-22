const API_URL = "http://localhost:3000";

export const fetchUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  return response.json();
};

export const fetchRoles = async () => {
  const response = await fetch(`${API_URL}/roles`);
  return response.json();
};

export const createUser  = async (user) => {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return response.json();
};

export const createRole = async (role) => {
  const response = await fetch(`${API_URL}/roles`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(role),
  });
  return response.json();
};