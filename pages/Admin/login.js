// pages/admin/login.js

import { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import Router from 'next/router';
import styles from '/styles/Admin/LoginForm.module.scss';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let result=await signIn('credentials', {
        username,
        password,
        // Add other data as needed for the credentials provider
        redirect: false, // Set this to true if you want to handle redirection manually
      });

      // Redirect to admin dashboard or other private page upon successful login
      if(result){
        Router.push('/Admin/Dashboard');
      }
      else{
        Router.push('/Admin/login');
      }
     
    } catch (error) {
      console.error('Login failed:', error?.message || 'Unknown error');
    }
  };

  return (
    <div className='container'>
      <h1 className={styles.heading}> Admin Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputgroup}>
          <label className={styles.label} htmlFor="username">Username</label>
          <input className={styles.input} type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label className={styles.label} htmlFor="password">Password</label>
          <input className="input" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className={styles.button} type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
