import React, { useState } from 'react';
import LoginForm from '../../src/components/LoginForm';


const LoginPage = () => {
  const [role, setRole] = useState('');

  const handleLogin = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <div className='container mt-3 mb-3 '>
      {role ? (
        <div className='container mt-3 mb-3 '>
          <h2>Welcome, {role}!</h2>
          {/* Place your admin dashboard content here */}
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default LoginPage;
