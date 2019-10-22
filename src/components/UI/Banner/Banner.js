import React from 'react'
import styled from 'styled-components'
import ElProyectoPortada from '../../../assets/images/elproyecto.jpg'

const banner = props => {
    const Banner = styled.div `
        height: 60vh;
        width: 100%;
        display: table;
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        &.el-proyecto {
            background-image: url(${ElProyectoPortada})
        }
    `

    return (
        <Banner className={props.bannerStyles} style={props.style}>{props.children}</Banner>
    )
}

export default banner