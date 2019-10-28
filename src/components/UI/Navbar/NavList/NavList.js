import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './NavList.css'

const navList = props => {
    return (
        <li className={classes.NavList}>
            <NavLink activeStyle={{color: 'orangered'}} exact to={props.urlLink}>{props.name}</NavLink>
        </li>
    )
}

export default navList