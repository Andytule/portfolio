import React from 'react'
import styles from './Home.module.css'
import { Container } from 'react-bootstrap'

const Home = () => {
    return (
        <div className={styles.container} id='home'>
            <Container fluid='md' className={styles.info}>
                <h1 className={styles.name}>Andy Le</h1>
                <h2 className={styles.title}>Software Developer</h2>
            </Container>
        </div>
    )
}

export default Home;