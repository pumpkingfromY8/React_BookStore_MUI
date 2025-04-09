import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8B4513", // Warm brown like old books
    },
    secondary: {
      main: "#F4A460", // Sandy color
    },
    background: {
      default: "#FAF3E0", // Soft paper-like background
    },
  },
  typography: {
    fontFamily: "Georgia, serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
