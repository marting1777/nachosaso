import React, { Component } from 'react'
import styled from 'styled-components'

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

        const HomeSection = styled.section `
            background-image: url(${ArgentinSinAtajos});
            background-repeat: no-repeat;
            background-size: cover;
            background-attachment: fixed;
            height: 80vh;
            background-position: center;
            width: 100%;
            display: table;
            position: relative;
        `

        const TitlePosition = styled.div `
            display: table-cell;
            vertical-align: middle;
        `

        const Vision = styled.section `
            margin-top: 12px;
            @media (min-width: 768px) {
                padding: 50px 0;
            }
        `

        const VisionContainer = styled.div `
            padding-top: 30px;
        `

        const VisionText = styled.p `
            position: relative;
            top: -88px;
            font-size: 22px;
            letter-spacing: 0px;
            @media (min-width: 768px) {
                font-size: 30px;
                top: -123px;
            }
        `

        return (
            <div>
                <HomeSection>
                    <TitlePosition>
                        <Title titleClass="title" title={this.state.main.mainTitle}/>
                    </TitlePosition>
                </HomeSection>

                <Vision>
                    <Container>
                        <VisionContainer>
                            <Title titleClass="title-vision" title={this.state.main.visionTitle}/>
                            <VisionText>{this.state.main.visionText}</VisionText>
                        </VisionContainer>

                        <Grid container>
                            {cardList}
                        </Grid>
                    </Container>
                </Vision>
            </div>
        )
    }
}

export default Home