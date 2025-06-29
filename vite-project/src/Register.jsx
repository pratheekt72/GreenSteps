import { useState } from 'react';
import { registerUser } from './api'; // make sure this path is correct

function RegisterForm() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { status, data } = await registerUser(formData);

    if (status === 201) {
      setMessage('User registered!');
    } else {
      setMessage(data.message || 'Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} placeholder="Name" />
      <input name="email" onChange={handleChange} placeholder="Email" />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" />
      <button type="submit">Register</button>
      <p>{message}</p>
    </form>
  );
}

export default RegisterForm;
