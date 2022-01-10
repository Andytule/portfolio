import React from 'react'
import styles from './Home.module.css'
import { Container, Typography } from '@mui/material'

const Home = () => {
    return (
        <div className={styles.container} id='home'>
            <Container fluid='md' className={styles.info}>
                <Typography variant="h1">
                    Andy Le
                </Typography>
                <Typography variant="h3">
                    Software Engineer
                </Typography>
            </Container>
        </div>
    )
}

export default Home;