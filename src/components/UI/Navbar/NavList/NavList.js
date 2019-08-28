import React from 'react'
import { Link } from 'react-router-dom'

import classes from './NavList.css'

const navList = props => {
    return (
        <li className={classes.NavList}><Link to={props.urlLink}>{props.name}</Link></li>
    )
}

export default navList