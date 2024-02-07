// App.js
import React, { useState } from 'react';
import TaskManager from './TaskManager';
import Login from './Login';
import Signup from './Signup';
import './YourCustomStyles.css'; // Include your custom styles

const App = () => {
  const [user, setUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = (username) => {
    // Set the user in the state upon successful login
    setUser(username);
  };

  const handleSignup = (username) => {
    // Set the user in the state upon successful signup
    setUser(username);
    setShowSignup(false);
  };

  const handleLogout = () => {
    // Clear the user from the state upon logout
    setUser(null);
  };

  return (
    <div className="app-container">
      {user ? (
        <TaskManager user={user} onLogout={handleLogout} />
      ) : (
        <>
          {!showSignup ? (
            <Login onLogin={handleLogin} onSignup={() => setShowSignup(true)} />
          ) : (
            <Signup onSignup={handleSignup} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
