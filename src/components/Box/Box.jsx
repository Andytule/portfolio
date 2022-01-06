import React from 'react'
import styles from './Box.module.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'

const Box = ({ data: { title, text, image, demo, github } }) => {

    return (
        <Card className={styles.container} sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={image}
                    alt={text}
                />
            </CardActionArea>
            <CardContent className={styles.content}>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.primary">
                    {text}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="secondary">
                    Demo
                </Button>
            </CardActions>
        </Card>
    )
}

export default Box