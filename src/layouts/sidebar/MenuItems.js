// import React, { createContext, useContext } from "react";
// //import json file
// const MenuContext = createContext();

// export function AppMenuProvider({ children }) {
//   const role = sessionStorage.getItem('role');
//   const menuItems = [
//     {
//       title: "Dashboard",
//       icon: "home",
//       href: "/Admin/Dashboard",
//     },
//     {
//       title: "Orders",
//       icon: "disc",
//       href: "/Admin/orders",
//     },
//     {
//       title: "Create Order",
//       icon: "layout",
//       href: "/Admin/createOrder",
//     },
//     role === "operations"
//       ? {
//           title: "Menu Calculator",
//           icon: "layout",
//           href: "/Admin/calculator",
//         }
//       : null,
//     {
//       title: "Send Email",
//       icon: "info",
//       href: "sendEmail",
//     },
//     {
//       title: "Business",
//       icon: "star",
//       href: "rating",
//     }
//   ];

//   return (
//     <MenuContext.Provider
//       value={{
//         role,
//         menuItems
//       }}
//     >
//       {children}
//     </MenuContext.Provider>
//   );
// }

// export function useAppMenu() {
//   return useContext(MenuContext);
// }
const menuItems = [
  {
    title: "Dashboard",
    icon: "home",
    href: "/Admin/Dashboard",
  },
  {
    title: "Orders",
    icon: "disc",
    href: "/Admin/orders",
  },
  {
    title: "Create Order",
    icon: "layout",
    href: "/Admin/createOrder",
  },

  {
    title: "Menu Calculator",
    icon: "layout",
    href: "/Admin/calculator",
  },
  {
    title: "Send Email",
    icon: "info",
    href: "sendEmail",
  },
  {
    title: "Business",
    icon: "star",
    href: "rating",
  },
];

export default menuItems;
