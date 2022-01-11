import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import { NavBar, Home, Project } from "./components";
import styles from "./App.module.css";

const theme = createTheme({
  palette: {
    type: "light",
    background: {
      default: "#7cbcd4",
    },
    primary: {
      main: "#3180a8",
    },
  },
  typography: {
    fontFamily: '"Quicksand", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container maxWidth="false" className={styles.container}>
          <NavBar />
          <Home />
          <Project />
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
