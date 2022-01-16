import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import logo from "./images/brand.png";
import styles from "./NavBar.module.css";
import { Link } from "react-scroll";
import { Typography } from "@mui/material";

const NavBar = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="transparent"
        variant="dark"
        fixed="top"
      >
        <Link to="home" smooth={true}>
          <Navbar.Brand>
            <Image src={logo} className={styles.brand} />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              as={Link}
              className={styles.link}
              to="projects"
              smooth={true}
            >
              <Typography variant="h5" color="text.primary">
                Projects
              </Typography>
            </Nav.Link>
            <Nav.Link
              as={Link}
              className={styles.link}
              to="projects"
              smooth={true}
            >
              <Typography variant="h5" color="text.primary">
                Resume
              </Typography>
            </Nav.Link>
            <Nav.Link
              as={Link}
              className={styles.link}
              to="projects"
              smooth={true}
            >
              <Typography variant="h5" color="text.primary">
                Contact
              </Typography>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
