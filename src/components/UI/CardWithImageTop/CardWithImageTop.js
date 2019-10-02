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
                    {props.title ?
                        <h5 className={classes.CardTitle}>{props.title}</h5>
                    : null}
                    {props.text ? 
                        <p className={classes.CardParagraph}>{props.text}</p>
                    : null}
                </CardContent>
                {props.linkUrl ?
                    <Link className={classes.LinkStyle} to={props.linkUrl}>
                        Ver Más
                    </Link>
                : null}
            </Card>
        </Grid>
    )
}

export default cardWithImageTop