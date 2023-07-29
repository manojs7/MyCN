import React, { createContext, useContext } from "react";
import { useSession } from "next-auth/react"; // Import useSession hook

const MenuContext = createContext();

export function AppMenuProvider({ children }) {
  // Use the useSession hook to access the session data
  const { data: session } = useSession();

  const role = session?.user?.role;

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
  ].filter(Boolean); // Filter out null values from the menuItems array

  return (
    <MenuContext.Provider
      value={{
        menuItems,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export function useAppMenu() {
  console.log(MenuContext);
  return useContext(MenuContext);
}
