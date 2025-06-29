import React, { useState } from 'react';
import { registerUser } from './api';  // adjust path if needed

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle registration form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { status, data } = await registerUser(formData);
      if (status === 201) {
        setMessage('User registered successfully!');
      } else {
        setMessage(data.message || 'Registration failed');
      }
    } catch (error) {
      setMessage('Error: ' + error.message);
    }
  };

  // Test backend connection
  

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      

      <h2>Register Yourself to make an impact on the environment</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ display: 'block', marginBottom: 10, width: '100%' }}
        />
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ display: 'block', marginBottom: 10, width: '100%' }}
          type="email"
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ display: 'block', marginBottom: 10, width: '100%' }}
        />
        <button type="submit" style={{ width: '100%' }}>
          Register
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
