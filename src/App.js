import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavBar, Home, Project } from "./components";
import styles from "./App.module.css";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#232e52",
    },
    secondary: {
      main: "#bfc1d3",
    },
    background: {
      paper: "#434f6f",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontFamily: ["Quicksand", "sans-serif"].join(","),
  },
});

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className={styles.container}>
          <NavBar />
          <Home />
          <Project />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
