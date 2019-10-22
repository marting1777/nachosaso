import React, { Component } from 'react'
import styled from 'styled-components'

import Banner from '../UI/Banner/Banner'
import Title from '../UI/Title/Title'
import Tabs from '../UI/Tabs/Tabs'

import CardEtapa from '../UI/CardWithImageTop/CardWithImageTop'
import ElProyectoPortada from '../../assets/images/elproyecto.jpg'
import { Grid } from '@material-ui/core'

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
            cuatro: {
                laRioja: {
                    id: 1,
                    title: 'La Rioja',
                    image: ElProyectoPortada
                },
                sanJuan: {
                    id: 2,
                    title: 'San Juan',
                    image: ElProyectoPortada
                },
                sanLuis: {
                    id: 3,
                    title: 'San Luis',
                    image: ElProyectoPortada
                },
            },
            cinco: {
                mendoza: {
                    id: 1,
                    title: 'Mendoza',
                    image: ElProyectoPortada
                },
                neuquen: {
                    id: 2,
                    title: 'Neuquén',
                    image: ElProyectoPortada
                },
                rioNegro: {
                    id: 3,
                    title: 'Rio Negro',
                    image: ElProyectoPortada
                },
            },
            seis: {
                chubut: {
                    id: 1,
                    title: 'Chubut',
                    image: ElProyectoPortada
                },
                santaCruz: {
                    id: 2,
                    title: 'Santa Cruz',
                    image: ElProyectoPortada
                },
                tierraDelFuego: {
                    id: 3,
                    title: 'Tierra Del Fuego',
                    image: ElProyectoPortada
                },
                antartidaArgentina: {
                    id: 4,
                    title: 'Antartida Argentina',
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

        const cardsEtapaCuatro = Object.values(this.state.etapas.cuatro)
        const cardsCuatro = cardsEtapaCuatro.map(card => {
            return <CardEtapa 
                    key={card.id} 
                    title={card.title}
                    imageUrl={card.image}/>
        })

        const cardsEtapaCinco = Object.values(this.state.etapas.cinco)
        const cardsCinco = cardsEtapaCinco.map(card => {
            return <CardEtapa 
                    key={card.id} 
                    title={card.title}
                    imageUrl={card.image}/>
        })

        const cardsEtapaSeis = Object.values(this.state.etapas.seis)
        const cardsSeis = cardsEtapaSeis.map(card => {
            return <CardEtapa 
                    key={card.id} 
                    title={card.title}
                    imageUrl={card.image}/>
        })

        const TableDisplay = styled.div `
            display: table-cell;
            vertical-align: middle;
        `

        return (
            <div>
                <Banner bannerStyles="el-proyecto">
                    <TableDisplay>
                        <Title titleClass="title-el-proyecto" title={this.state.title}/>
                    </TableDisplay>
                </Banner>
                <Tabs>
                    <div label="Etapa 1">
                        <Grid container>
                            {cardsUno}
                        </Grid>
                    </div>
                    <div label="Etapa 2">
                        <Grid container>
                            {cardsDos}
                        </Grid>
                    </div>
                    <div label="Etapa 3">
                        <Grid container>
                            {cardsTres}
                        </Grid>
                    </div>
                    <div label="Etapa 4">
                        <Grid container>
                            {cardsCuatro}
                        </Grid>
                    </div>
                    <div label="Etapa 5">
                        <Grid container>
                            {cardsCinco}
                        </Grid>
                    </div>
                    <div label="Etapa 6">
                        <Grid container>
                            {cardsSeis}
                        </Grid>
                    </div>
                </Tabs>
            </div>
        )
    }
}

export default ElProyecto