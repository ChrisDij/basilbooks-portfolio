import React, { useState } from "react";
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Avatar,
} from "@mui/material";
import {
  Search as SearchIcon,
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
  Refresh as RefreshIcon,
  Menu as MenuIcon,
  AccountCircle,
  ExpandMore,
} from "@mui/icons-material";
import { styled, alpha } from "@mui/material/styles";
import { useRefresh } from "react-admin";
import { useNavigate } from "react-router-dom";
import { useCustomTheme } from "./Layout";

// Define Search styled component
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

// Define SearchIconWrapper styled component
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// Define StyledInputBase styled component
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

export const AppBar = () => {
  const { isDarkMode, toggleTheme, toggleSidebar } = useCustomTheme();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const refresh = useRefresh();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleRefresh = () => {
    refresh();
  };

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <MuiAppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="toggle sidebar"
          onClick={toggleSidebar}
          edge="start"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" noWrap component="div" sx={{ mr: 4 }}>
          BasilBooks
        </Typography>

        <Typography variant="h6" sx={{ mr: 4 }}>
          Admin
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Search sx={{ mr: 2 }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
            value={searchValue}
            onChange={handleSearch}
          />
        </Search>

        <IconButton color="inherit" onClick={toggleTheme} sx={{ mr: 1 }}>
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        <IconButton color="inherit" onClick={handleRefresh} sx={{ mr: 2 }}>
          <RefreshIcon />
        </IconButton>

        <Box
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={handleMenuOpen}
        >
          <Avatar
            sx={{
              width: 32,
              height: 32,
              mr: 1,
              bgcolor: "rgba(255,255,255,0.2)",
            }}
          >
            <AccountCircle />
          </Avatar>
          <Typography variant="body2" sx={{ mr: 1 }}>
            Admin Account 1
          </Typography>
          <ExpandMore />
        </Box>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem
            onClick={() => {
              navigate("/settings");
              handleMenuClose();
            }}
          >
            Settings
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </MuiAppBar>
  );
};
