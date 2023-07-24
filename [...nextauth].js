// import NextAuth from 'next-auth';
// import providers from 'next-auth/providers';

// const options = {
//   providers: [
//     providers.Credentials({
//       // The name to display on the sign-in form (e.g. "Sign in with...")
//       name: 'Credentials',
//       credentials: {
//         username: { label: "Username", type: "text" },
//         password: { label: "Password", type: "password" }
//       },
//       authorize: async (credentials) => {
//         if (credentials.username === 'sales' && credentials.password === 'sales123') {
//           return Promise.resolve({ name: 'Sales User' });
//         } else if (credentials.username === 'admin' && credentials.password === 'admin123') {
//           return Promise.resolve({ name: 'Admin' });
//         } else if (credentials.username === 'superadmin' && credentials.password === 'superadmin123') {
//           return Promise.resolve({ name: 'Super Admin' });
//         } else if (credentials.username === 'operations' && credentials.password === 'operations123') {
//           return Promise.resolve({ name: 'Operations User' });
//         } else {
//           return Promise.resolve(null);
//         }
//       }
//     })
//   ],
// };

// export default (req, res) => NextAuth(req, res, options);
