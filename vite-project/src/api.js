const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const registerUser = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/api/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();
  return { status: response.status, data };
};
