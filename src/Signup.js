// Signup.js
import React, { useState } from 'react';
import './YourCustomStyles.css';

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Implement your signup logic here
    // For simplicity, let's assume a successful signup for any non-empty username/password
    if (username.trim() !== '' && password.trim() !== '') {
      onSignup(username);
    } else {
      alert('Invalid input. Please provide valid information.');
    }
  };

  return (
    <div className="signup-form">
      <h2 className="heading">Sign Up</h2>
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
      <button onClick={handleSignup} className="btn">
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
