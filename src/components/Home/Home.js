import React, { Component } from 'react'
import classes from './Home.css'

import ArgentinSinAtajos from '../../assets/images/sin-atajos-portada.jpg'
import ElProyetoImg from '../../assets/images/elproyecto.jpg'
import HitosImg from '../../assets/images/hitos.jpg'
import SobreMiImg from '../../assets/images/sobre-mi-portada.jpg'

import Title from '../UI/Title/Title'
import { Container, Grid } from '@material-ui/core'
import CardWithImageTop from '../UI/CardWithImageTop/CardWithImageTop'

class Home extends Component {

    state = {
        main: {
            mainTitle: 'ARGENTINA SIN ATAJOS',
            visionTitle: 'Visión',
            visionText: 'Mostrar a través de la propia experiencia que, con esfuerzo, constancia y pasión, uno puede encontrar su propósito y lo que ama hacer, y hacer de eso, no sólo un modo de subsistir, sino una filosofía de vida. Que el camino sea el objetivo, no una llegada.'
        },
        cardGrid: {
            one: {
                id: 1,
                title: 'El Proyecto',
                text: 'El proyecto nace gracias a una búsqueda intensa de mi propósito...',
                linkUrl: '/el-proyecto',
                image: ElProyetoImg
            },
            two: {
                id: 2,
                title: 'Hitos',
                text: 'Conocé los momentos más importantes de mi viaje hasta el momento...',
                linkUrl: '/hitos',
                image: HitosImg
            },
            three: {
                id: 3,
                title: 'Sobre Mí',
                text: 'Soy un apasionado de las aventuras, las busco, y me dan algo que no me da otra cosa...',
                linkUrl: '/sobre-mi',
                image: SobreMiImg
            }
        }
    }

    render () {

        const cardsObj = Object.values(this.state.cardGrid)
        const cardList = cardsObj.map(card => {
            return <CardWithImageTop key={card.id}
                        title={card.title}
                        text={card.text}
                        linkUrl={card.linkUrl}
                        imageUrl={card.image} />
        })

        return (
            <div className={classes.Home}>
                <section className={classes.HomeSection} style={{backgroundImage: `url(${ArgentinSinAtajos})`}}>
                    <div className={classes.TitlePosition}>
                        <Title titleClass={classes.Title} title={this.state.main.mainTitle}/>
                    </div>
                </section>

                <section className={classes.Vision}>
                    <Container>
                        <div className={classes.VisionContainer}>
                            <Title titleClass={classes.TitleVision} title={this.state.main.visionTitle}/>
                            <p className={classes.VisionText}>{this.state.main.visionText}</p>
                        </div>

                        <hr></hr>

                        <Grid container>
                            {cardList}
                        </Grid>
                    </Container>
                </section>
            </div>
        )
    }
}

export default Home