// import React, { useState } from 'react';
// import styles from '../../styles/Admin/LoginForm.module.scss';

// const LoginForm = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Perform authentication logic here
//     // Replace the below code with your actual authentication implementation

//     if (username === 'sales' && password === 'sales123') {
//       onLogin('sales');
//     } else if (username === 'admin' && password === 'admin123') {
//       onLogin('admin');
//     } else if (username === 'superadmin' && password === 'superadmin123') {
//       onLogin('superadmin');
//     } else if (username === 'operations' && password === 'operations123') {
//       onLogin('operations');
//     } else {
//       setError('Invalid username or password');
//     }
//   };

//   return (
//     <form className={styles.form} onSubmit={handleSubmit}>
//       <h2 className={styles.heading}>Admin Login</h2>
//       <div className={styles.inputGroup}>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={handleUsernameChange}
//         />
//       </div>
//       <div className={styles.inputGroup}>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={handlePasswordChange}
//         />
//       </div>
//       {error && <p className={styles.error}>{error}</p>}
//       <button type="submit" className={styles.button}>Login</button>
//     </form>
//   );
// };

// export default LoginForm;
export default function LoginForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    const result = await signIn('credentials', {
      username,
      password,
      redirect: false // Prevent automatic redirection
    });

    if (result.error) {
      // Handle login error
      console.log(result.error);
    } else {
      router.push('/Admin/Dashboard')
      // Login successful, redirect to admin page or dashboard
      // You can use the router from 'next/router' to navigate to the desired page
      // Example: router.push('/admin');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
