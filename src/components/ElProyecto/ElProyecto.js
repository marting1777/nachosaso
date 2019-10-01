import React, { Component } from 'react'
import classes from './ElProyecto.css'

import Banner from '../UI/Banner/Banner'
import Title from '../UI/Title/Title'

import ElProyectoPortada from '../../assets/images/elproyecto.jpg'

class ElProyecto extends Component {

    state = {
        title: 'El Proyecto'
    }

    render () {
        return (
            <div className={classes.ElProyecto}>
                <Banner bannerStyles={classes.Banner} style={{backgroundImage: `url('${ElProyectoPortada}')`}}>
                    <div className={classes.TableDisplay}>
                        <Title titleClass={classes.Title} title={this.state.title}/>
                    </div>
                </Banner>
            </div>
        )
    }
}

export default ElProyecto