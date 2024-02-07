// Login.js
import React, { useState } from 'react';
import './YourCustomStyles.css';

const Login = ({ onLogin, onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your authentication logic here
    // For simplicity, let's assume a successful login for any non-empty username/password
    if (username.trim() !== '' && password.trim() !== '') {
      onLogin(username);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-form">
      <h2 className="heading">Login</h2>
      <input
        className="input"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className="btn">
        Login
      </button>
      <p>
        Don't have an account? <span className="link" onClick={onSignup}>Sign up</span>
      </p>
    </div>
  );
};

export default Login;
