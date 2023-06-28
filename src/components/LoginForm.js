import React, { useState } from 'react';
import styles from '../../styles/Admin/LoginForm.module.scss';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform authentication logic here
    // Replace the below code with your actual authentication implementation

    if (username === 'sales' && password === 'sales123') {
      onLogin('sales');
    } else if (username === 'admin' && password === 'admin123') {
      onLogin('admin');
    } else if (username === 'superadmin' && password === 'superadmin123') {
      onLogin('superadmin');
    } else if (username === 'operations' && password === 'operations123') {
      onLogin('operations');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.heading}>Admin Login</h2>
      <div className={styles.inputGroup}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <button type="submit" className={styles.button}>Login</button>
    </form>
  );
};

export default LoginForm;
