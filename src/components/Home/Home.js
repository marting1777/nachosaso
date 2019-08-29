import React, { Component } from 'react'
import classes from './Home.css'

import JujuyBackground from '../../assets/images/jujuy.jpg'

import Title from '../UI/Title/Title'

class Home extends Component {
    render () {
        return (
            <div className={classes.Home}>
                <section className={classes.HomeSection} style={{backgroundImage: `url(${JujuyBackground})`}}>
                    <div className={classes.TitlePosition}>
                        <Title titleClass={classes.Title} title="ARGENTINA SIN ATAJOS"/>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home