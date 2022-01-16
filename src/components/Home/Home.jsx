import React from "react";
import styles from "./Home.module.css";
import { Container, Typography } from "@mui/material";

const Home = () => {

  return (
    <div className={styles.container} id="home">
      <Container fluid="md" className={styles.info}>
        <Typography variant="h1" color="text.primary">
          Andy Le
        </Typography>
        <Typography variant="h4" color="text.primary">
          Software Engineer
        </Typography>
      </Container>
    </div>
  );
};

export default Home;
