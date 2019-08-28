import React from 'react'
import { Link } from 'react-router-dom'
import classes from './NoMatch.css'

import Title from '../UI/Title/Title'

const noMatch = () => (
    <div className={classes.NoMatch}>
        <Title titleClass={classes.NoMatchTitle} title="Ups! Esta página no existe." />
        <Link to="/">Volver a la Home</Link>
    </div>
)

export default noMatch