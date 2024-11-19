import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext"; // Make sure this path is correct
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ThemeToggle = () => {
  const { toggleTheme, mode } = useContext(ThemeContext);

  if (!toggleTheme || !mode) {
    console.error("ThemeContext is not providing 'toggleTheme' or 'mode'.");
    return null; // Prevent crashing if context isn't properly set up
  }

  return (
    <IconButton onClick={toggleTheme} color="inherit" aria-label="Toggle theme">
      {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
};

export default ThemeToggle;
