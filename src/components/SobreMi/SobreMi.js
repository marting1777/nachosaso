import React, { Component } from 'react'
import classes from './SobreMi.css'

import { Container, Grid } from '@material-ui/core'
import NachoImgParado from '../../assets/images/nacho-saso.jpeg'
import Title from '../UI/Title/Title'

class SobreMi extends Component {

    state = {
        seccion: 'Mi Historia',
        frase: 'soy un apasionado de las aventuras, las busco, y me dan algo que no me da otra cosa.',
        name: 'NACHO SÁNCHEZ SORONDO',
        text1: 'La historia de mi viaje, como muchas, arranca con un final que terminó siendo un comienzo.',
        text2: 'Algunos saben desde chicos qué, dónde y cómo quieren hacer lo que va a ser su proyecto de vida. A muchos otros, yo entre ellos, nos lleva unos años más. En mi caso, 30 años, hasta que lo encontré.',
        text3: 'Soy un apasionado de las aventuras, ya que se aprende mucho, y al mismo tiempo creo q estos aprendizajes, estos testimonios se deben compartir, regalar a las personas.',
        text4: 'Y, un día, me tocó a mí. Descubrí mi propósito, buscando, haciendo esto y aquello, hasta encontrarlo: documentar aventuras.'
    }

    render () {
        return (
            <section style={{backgroundImage: `url(${NachoImgParado})`}} className={classes.SobreMi}>
                <Container>
                    <Grid container>
                        <Grid item xs={12} sm={6}>
                            <Title titleClass={classes.HistoriaTitle} title={this.state.seccion}/>
                            <p className={classes.Frase}>{this.state.frase}</p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Title titleClass={classes.Name} title={this.state.name} />
                            <p className={classes.Text1}>{this.state.text1}</p>
                            <p className={classes.Text1}>{this.state.text2}</p>
                            <p className={classes.Text1}>{this.state.text3}</p>
                            <p className={classes.Text1}>{this.state.text4}</p>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        )
    }
}

export default SobreMi