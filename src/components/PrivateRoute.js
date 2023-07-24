// components/PrivateRoute.js

import { useSession } from 'next-auth/react';
import Router from 'next/router';

const PrivateRoute = ({ children }) => {
  const { data: session, status } = useSession();
  console.log("sess", useSession())
  if (status === 'loading') {
    // Optional: Show a loading spinner
    return <div>Loading...</div>;
  }

  if (!session) {
    // Redirect to login if the user is not authenticated
    Router.push('/Admin/login');
    console.log('Not authenticated. Redirecting to login...');
    return null;
  }

  // Render the children if the user is authenticated
  return children;
};

export default PrivateRoute;
