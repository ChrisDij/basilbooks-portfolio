import React, { useState, useContext } from "react";
import { Layout as RaLayout } from "react-admin";
import { AppBar } from "./AppBar";
import { Sidebar } from "./Sidebar";
import { ThemeProvider } from "@mui/material/styles";
import { customTheme, darkTheme } from "../theme";

const ThemeContext = React.createContext();

export const useCustomTheme = () => useContext(ThemeContext);

export const Layout = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const currentTheme = isDarkMode ? darkTheme : customTheme;

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, toggleTheme, sidebarOpen, toggleSidebar }}
    >
      <ThemeProvider theme={currentTheme}>
        <RaLayout {...props} appBar={AppBar} sidebar={Sidebar} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
