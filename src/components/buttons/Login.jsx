import React, { useState } from 'react';
// import { UserContext }
const Login = () => {
  // const { users, user, setUser, } = useContext(UserContext); 
  const [username, setUsername] = useState(''); // holding value until user hits submit 
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({ username: "mor_2314",
        password: "83r5^_" }),
      });
    
    

      if (response.ok) {
        // Successfully logged in
        const data = await response.json(); // data = token 
        // findUser(username, password) => 
        // loadRemoteCart(userId)
        setMessage(`Welcome, ${data.username}!`);
      } else {
        // Login failed
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
