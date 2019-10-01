import React from 'react'
import classes from './CardWithImageTop.css'
import { Link } from 'react-router-dom'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
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
                    <h5 className={classes.CardTitle}>{props.title}</h5>
                    <p className={classes.CardParagraph}>{props.text}</p>
                </CardContent>
                <Link className={classes.LinkStyle} to={props.linkUrl}>
                    Ver Más
                </Link>
            </Card>
        </Grid>
    )
}

export default cardWithImageTop