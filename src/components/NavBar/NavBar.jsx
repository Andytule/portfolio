import React from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap'
import logo from './images/brand.png'
import styles from './NavBar.module.css'
import { Link } from 'react-scroll'

const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand='lg' bg='transparent' variant='dark' fixed='top'>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Link to='home' smooth={true}>
                    <Navbar.Brand>
                        <Image src={logo} className={styles.brand} />
                    </Navbar.Brand>
                </Link>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='ml-auto'>
                        <Nav.Link as={Link} className={styles.link} to='projects' smooth={true} >Projects</Nav.Link>
                        <Nav.Link as={Link} className={styles.link} to='projects' smooth={true} >Resume</Nav.Link>
                        <Nav.Link as={Link} className={styles.link} to='projects' smooth={true} >Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar