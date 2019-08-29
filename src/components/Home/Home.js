import React, { Component } from 'react'
import classes from './Home.css'

import JujuyBackground from '../../assets/images/jujuy.jpg'
import Title from '../UI/Title/Title'
import { Container } from '@material-ui/core'

class Home extends Component {

    state = {
        mainTitle: 'ARGENTINA SIN ATAJOS',
        visionTitle: 'Visión',
        visionText: 'Mostrar a través de la propia experiencia que, con esfuerzo, constancia y pasión, uno puede encontrar su propósito y lo que ama hacer, y hacer de eso, no sólo un modo de subsistir, sino una filosofía de vida. Que el camino sea el objetivo, no una llegada.'
    }

    render () {
        return (
            <div className={classes.Home}>
                <section className={classes.HomeSection} style={{backgroundImage: `url(${JujuyBackground})`}}>
                    <div className={classes.TitlePosition}>
                        <Title titleClass={classes.Title} title={this.state.mainTitle}/>
                    </div>
                </section>

                <section className={classes.Vision}>
                    <Container>
                        <div className={classes.VisionContainer}>
                            <Title titleClass={classes.TitleVision} title={this.state.visionTitle}/>
                            <p className={classes.VisionText}>{this.state.visionText}</p>
                        </div>
                    </Container>
                </section>
            </div>
        )
    }
}

export default Home