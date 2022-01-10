import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavBar, Home, Project } from "./components";
import styles from "./App.module.css";

const theme = createTheme({
  palette: {
    type: "light",
  },
  typography: {
    fontFamily: '"Quicksand", "Roboto", "Helvetica", "Arial", sans-serif',
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
