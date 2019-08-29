import React, { Component } from 'react'
import classes from './SideDrawer.css'

import NavList from '../Navbar/NavList/NavList'
import Title from '../Title/Title'

class SideDrawer extends Component {

    state = {
        navigationLinks: [
            {id: 1, name: 'HOME', link: '/'},
            {id: 2, name: 'EL PROYECTO', link: '/el-proyecto'},
            {id: 3, name: 'HITOS', link: '/hitos'},
            {id: 4, name: 'SOBRE MI', link: '/sobre-mi'},
            {id: 5, name: 'CONTENIDO & REDES', link: '/contenido-y-redes'},
            {id: 6, name: 'RECURSOS', link: '/recursos'},
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

        let drawerClasses = [classes.SideDrawer]

        if (this.props.show) {
            drawerClasses = [classes.SideDrawer, classes.SideDrawerOpen]
        }

        return (
            <div className={drawerClasses.join(' ')}>
                <Title titleClass={classes.Title} title="Nacho Saso" />
                <ul onClick={this.props.click}>
                    {navLinks}
                </ul>
            </div>
        )
    }
}

export default SideDrawer