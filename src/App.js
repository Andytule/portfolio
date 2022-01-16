import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import { NavBar, Home, Project } from "./components";
import styles from "./App.module.css";
import Particles from "react-tsparticles";

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
    const particlesInit = (main) => {
      console.log(main);

      // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
      console.log(container);
    };

    return (
      <Container maxWidth="false" className={styles.container}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
        <ThemeProvider theme={theme}>
          <NavBar />
          <Home />
          <Project />
        </ThemeProvider>
      </Container>
    );
  }
}

export default App;
