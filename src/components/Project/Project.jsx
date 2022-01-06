import React from 'react'
import styles from './Project.module.css'
import { Box } from '../'
import { Container, Row, Col } from 'react-bootstrap'
import { ChessImg, CovidAppImg, BlokkusImg, AStarImg, DrawingImg, ElectroImg } from './images'

const Project = () => {

    const info = [
        [
            {
                title: 'Chess',
                text: 'Chess board game web app implementation using Chess JS with React, RxJS, and React DnD.',
                image: ChessImg,
                demo: 'https://andytule.github.io/chess',
                github: 'https://github.com/Andytule/chess'
            }, 
            {
                title: 'Covid Tracker',
                text: 'API based COVID-19 tracker web app developed using React JS, Material UI, and Chart.js.',
                image: CovidAppImg,
                demo: 'https://andytule.github.io/covid-app',
                github: 'https://github.com/Andytule/covid-app'
            }, 
            {
                title: 'Blokkus',
                text: 'Web app implementation of 2-4 player turned base puzzel game developed using Three.js. ',
                image: BlokkusImg,
                demo: 'https://andytule.github.io/blokkus',
                github: 'https://github.com/Andytule/blokkus'
            }
        ],
        [
            {
                title: 'A* Pathfinder',
                text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                image: AStarImg,
                demo: 'https://andytule.github.io/a-star-pathfinder',
                github: '#'
            },
            {
                title: 'Shape Drawing App',
                text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                image: DrawingImg,
                demo: '#',
                github: '#'
            }, 
            {
                title: 'Electromagnetic Robot',
                text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                image: ElectroImg,
                demo: '#',
                github: '#'
            }
        ]
    ]

    return (
        <div className={styles.container} id='projects'>
            <h2 className={styles.title}>Projects</h2>
            <Container>
                {info.map((row, i) => (
                    <Row noGutters={true}>
                        {row.map((data, j) => (
                            <Col sm={12} md={12} lg={4}>
                                <Box key={i} data={data}/>
                            </Col>
                        ))}
                    </Row>
                ))}
            </Container>
        </div>
    )
}

export default Project