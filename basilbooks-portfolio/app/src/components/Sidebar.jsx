import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
  Box,
} from "@mui/material";
import {
  Home as HomeIcon,
  LibraryBooks as LibraryIcon,
  People as UsersIcon,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import { useCustomTheme } from "./Layout";

const drawerWidth = 240;

export const Sidebar = () => {
  const { sidebarOpen } = useCustomTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [usersOpen, setUsersOpen] = React.useState(false);

  const handleUsersClick = () => {
    setUsersOpen(!usersOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

  const menuItems = [
    { text: "Dashboard", icon: <HomeIcon />, path: "/" },
    { text: "Books", icon: <LibraryIcon />, path: "/books" },
  ];

  const userItems = [
    { text: "User List", path: "/users" },
    { text: "Author Requests", path: "/author-requests" },
    { text: "User Reports", path: "/user-reports" },
  ];

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={sidebarOpen}
      sx={{
        width: sidebarOpen ? drawerWidth : 0,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          mt: "64px",
        },
      }}
    >
      <Box sx={{ overflow: "auto", p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          Menu
        </Typography>

        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => handleNavigation(item.path)}
              sx={{
                backgroundColor: isActive(item.path)
                  ? "rgba(45, 125, 125, 0.1)"
                  : "transparent",
                borderRadius: 1,
                mb: 1,
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}

          <ListItem
            button
            onClick={handleUsersClick}
            sx={{
              backgroundColor:
                isActive("/users") ||
                isActive("/author-requests") ||
                isActive("/user-reports")
                  ? "rgba(45, 125, 125, 0.1)"
                  : "transparent",
              borderRadius: 1,
              mb: 1,
            }}
          >
            <ListItemIcon>
              <UsersIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
            {usersOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={usersOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {userItems.map((item) => (
                <ListItem
                  button
                  key={item.text}
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    pl: 4,
                    backgroundColor: isActive(item.path)
                      ? "rgba(45, 125, 125, 0.1)"
                      : "transparent",
                    borderRadius: 1,
                    mb: 0.5,
                  }}
                >
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </List>
      </Box>
    </Drawer>
  );
};
