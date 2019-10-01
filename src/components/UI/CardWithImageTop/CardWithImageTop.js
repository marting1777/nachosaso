import React from 'react'
import classes from './CardWithImageTop.css'
import { Link } from 'react-router-dom'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const cardWithImageTop = props => {

    return (
        <Grid item xs={12} sm={4}>
            <Card className={classes.Card}>
                <CardMedia
                    className={classes.Media}
                    image={props.imageUrl}
                    title={props.title}
                    alt={props.title}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.text}
                </Typography>
                </CardContent>
                <Link className={classes.LinkStyle} to={props.linkUrl}>
                    Ver Más
                </Link>
            </Card>
        </Grid>
    )
}

export default cardWithImageTop