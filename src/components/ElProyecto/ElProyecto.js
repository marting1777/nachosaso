import React, { Component } from 'react'
import classes from './ElProyecto.css'

import Banner from '../UI/Banner/Banner'
import Title from '../UI/Title/Title'
import Tabs from '../UI/Tabs/Tabs'

import CardEtapa from '../UI/CardWithImageTop/CardWithImageTop'
import ElProyectoPortada from '../../assets/images/elproyecto.jpg'

class ElProyecto extends Component {

    state = {
        title: 'El Proyecto',
        etapas: {
            uno: {
                buenosAires: {
                    id: 1,
                    title: 'Buenos Aires',
                    image: ElProyectoPortada
                },
                cordoba: {
                    id: 2,
                    title: 'Cordoba',
                    image: ElProyectoPortada
                },
                catamarca: {
                    id: 3,
                    title: 'Catamarca',
                    image: ElProyectoPortada
                },
            },
            dos: {
                tucuman: {
                    id: 1,
                    title: 'Tucumán',
                    image: ElProyectoPortada
                },
                salta: {
                    id: 2,
                    title: 'Salta',
                    image: ElProyectoPortada
                },
                jujuy: {
                    id: 3,
                    title: 'Jujuy',
                    image: ElProyectoPortada
                },
            },
            tres: {
                chaco: {
                    id: 1,
                    title: 'Chaco',
                    image: ElProyectoPortada
                },
                formosa: {
                    id: 2,
                    title: 'Formosa',
                    image: ElProyectoPortada
                },
                corrientes: {
                    id: 3,
                    title: 'Corrientes',
                    image: ElProyectoPortada
                },
                misiones: {
                    id: 4,
                    title: 'Misiones',
                    image: ElProyectoPortada
                },
                entreRios: {
                    id: 5,
                    title: 'Entre Ríos',
                    image: ElProyectoPortada
                },
                santiagoDelEstero: {
                    id: 6,
                    title: 'Santiado Del Estero',
                    image: ElProyectoPortada
                },
            },
        },
    }

    render () {

        const cardsEtapaUno = Object.values(this.state.etapas.uno)
        const cardsUno = cardsEtapaUno.map(card => {
            return <CardEtapa 
                    key={card.id} 
                    title={card.title}
                    imageUrl={card.image}/>
        })

        const cardsEtapaDos = Object.values(this.state.etapas.dos)
        const cardsDos = cardsEtapaDos.map(card => {
            return <CardEtapa 
                    key={card.id} 
                    title={card.title}
                    imageUrl={card.image}/>
        })
        
        const cardsEtapaTres = Object.values(this.state.etapas.tres)
        const cardsTres = cardsEtapaTres.map(card => {
            return <CardEtapa 
                    key={card.id} 
                    title={card.title}
                    imageUrl={card.image}/>
        })

        return (
            <div className={classes.ElProyecto}>
                <Banner bannerStyles={classes.Banner} style={{backgroundImage: `url('${ElProyectoPortada}')`}}>
                    <div className={classes.TableDisplay}>
                        <Title titleClass={classes.Title} title={this.state.title}/>
                    </div>
                </Banner>
                <Tabs>
                    <div label="Etapa 1">
                        {cardsUno}
                    </div>
                    <div label="Etapa 2">
                        {cardsDos}
                    </div>
                    <div label="Etapa 3">
                        {cardsTres}
                    </div>
                </Tabs>
            </div>
        )
    }
}

export default ElProyecto