import React, { Component } from 'react'
import classes from './Navbar.css'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import NavList from './NavList/NavList'
import Title from '../Title/Title'

class NavBar extends Component {

    state = {
        navigationLinks: [
            {id: 1, name: 'HOME', link: '/'},
            {id: 2, name: 'EL PROYECTO', link: '/el-proyecto'},
            {id: 3, name: 'HITOS', link: '/hitos'},
            {id: 4, name: 'SOBRE MI', link: '/sobre-mi'},
            {id: 5, name: 'CONTENIDO & REDES', link: '/contenido-y-redes'},
            {id: 6, name: 'RECUSOS', link: '/recursos'},
        ]
    }

    render () {

        const navLinks = this.state.navigationLinks.map(nav => {
            return <NavList 
                    key={nav.id}
                    urlLink={nav.link}
                    name={nav.name}
            />
        })

        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Title titleClass={classes.Title} title="NACHO SASO"/>
                    <ul className={classes.LinksList}>
                        {navLinks}
                    </ul>
                </Toolbar>
          </AppBar>
        )
    }
}

export default NavBar