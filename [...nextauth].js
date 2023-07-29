import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const options = {
  secret: process.env.AUTH_SECRET,
  providers: [
    Credentials({
      // Your credentials provider configuration
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      /**
       * Authorizes the user based on the provided credentials.
       *
       * @param {object} credentials - The user credentials.
       * @param {string} credentials.username - The username.
       * @param {string} credentials.password - The password.
       *
       * @returns {Promise<object|null>} - A promise that resolves with the user object if the credentials are valid,
       *                                  or null otherwise.
       */
      authorize: async (credentials) => {
        const authorizedUsers = {
          admin: { username: "admin", password: "admin123", role: "Admin" },
          sales: {
            username: "sales",
            password: "sales123",
            role: "Super Admin",
          },
          operations: {
            username: "operations",
            password: "operations123",
            role: "ops",
          },
        };

        const user = authorizedUsers[credentials.username];
        if (user && user.password === credentials.password) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
    // Add other providers if needed
  ],
  callbacks: {
    async session(session, user) {
      session.user = user;
      return Promise.resolve(session);
    },
  },
  
};

export default NextAuth(options);
