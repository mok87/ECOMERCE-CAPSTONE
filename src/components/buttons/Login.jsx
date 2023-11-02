import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/user'; // Import your UserContext
import { CartContext } from '../../context/cart';

const Login = () => {
  const { authenticateUser, currentUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const cartContext = useContext(CartContext);

  const handleLogin = async () => {
    try {
      console.log(username, password);
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      console.log(response);

      if (response.ok) {
        const data = await response.json();
        authenticateUser(username, password);
        setMessage(`Welcome, ${currentUser.username}!`);
      } else {
        const errorData = await response.json();
        console.error('Login failed:', errorData);
        setMessage('Invalid username or password');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred while logging in');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
};

export default Login;
