import React from 'react'
import classes from './Backdrop.css'

const backdrop = props => (
    <div onClick={props.click} className={classes.Backdrop}></div>
)

export default backdrop