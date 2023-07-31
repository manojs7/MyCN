import React from "react";
import NextLink from "next/link";
import PropTypes from "prop-types";
import {
  Box,
  Drawer,
  useMediaQuery,
  List,
  Link,
  Button,
  Typography,
  ListItem,
  Collapse,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import FeatherIcon from "feather-icons-react";
import LogoIcon from "../logo/LogoIcon";
// import menuItems from "./MenuItems";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useAppMenu } from "./MenuItems";




const Sidebar = ({ isMobileSidebarOpen, onSidebarClose, isSidebarOpen }) => {

  const { data: session } = useSession();

  console.log("data", useSession())

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
    role === "operations"
      ? {
          title: "Menu Calculator",
          icon: "layout",
          href: "/Admin/calculator",
        }
      : null,
    {
      title: "Send Email",
      icon: "info",
      href: "sendEmail",
    },
    {
      title: "Business",
      icon: "star",
      href: "rating",
    }
  ].filter(Boolean); // Filter out null values from the menuItems array
  const [open, setOpen] = React.useState(true);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const location = useRouter().pathname;

  const handleClick = (index) => {
    setOpen((prevOpen) => (prevOpen === index ? !prevOpen : index));
  };

  const SidebarContent = (
    <Box p={2} height="100%" sx={{ display: "flex", flexDirection: "column" }}>
      <LogoIcon />
      <Box mt={2} sx={{ flexGrow: 1 }}>
        <List sx={{ flexGrow: 1 }}>
          {menuItems.map((item, index) => (
            <List
              component="li"
              disablePadding
              key={item.title}
              sx={{ mb: 1 }}
            >
              <NextLink href={item.href}>
                <ListItem
                  onClick={() => handleClick(index)}
                  button
                  selected={location === item.href}
                  sx={{
                    ...(location === item.href && {
                      color: "white",
                      backgroundColor: (theme) =>
                        `${theme.palette.primary.main}!important`,
                    }),
                  }}
                >
                  <ListItemIcon>
                    <FeatherIcon
                      style={{
                        color: `${location === item.href ? "white" : ""} `,
                      }}
                      icon={item.icon}
                      width="20"
                      height="20"
                    />
                  </ListItemIcon>
                  <ListItemText onClick={onSidebarClose}>
                    {item.title}
                  </ListItemText>
                </ListItem>
              </NextLink>
            </List>
          ))}
        </List>
      </Box>
    </Box>
  );

  const drawerProps = {
    anchor: "left",
    variant: lgUp ? "persistent" : "temporary",
    PaperProps: {
      sx: {
        width: "265px",
        border: "0 !important",
        ...(lgUp && {
          boxShadow: "0px 7px 30px 0px rgb(113 122 131 / 11%)",
        }),
      },
    },
  };

  const drawerOpen = lgUp ? isSidebarOpen : isMobileSidebarOpen;

  return (
    <Drawer
      anchor="left"
      open={drawerOpen}
      onClose={onSidebarClose}
      {...drawerProps}
    >
      {SidebarContent}
    </Drawer>
  );
};

Sidebar.propTypes = {
  isMobileSidebarOpen: PropTypes.bool,
  onSidebarClose: PropTypes.func,
  isSidebarOpen: PropTypes.bool,
};

export default Sidebar;
