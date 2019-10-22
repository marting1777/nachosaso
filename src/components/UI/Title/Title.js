import React from 'react'
import styled from 'styled-components'

const title = props => {
    const H1 = styled.h1 `
        text-transform: uppercase;
        margin: 0;
        &.title{
            text-align: center;
            font-size: 54px;
            color: #FFFFFF;
            text-shadow: 2px 2px #000;
        }
        &.title-vision {
            font-size: 76px;
            color: #aba9a9;
            letter-spacing: 10px;
        }
        &.title-el-proyecto {
            text-align: center;
            font-size: 54px;
            color: #FFFFFF;
            text-shadow: 2px 2px #000;
        }
        @media (min-width: 768px) {
            &.title {
                font-size: 70px;
            }
            &.title-vision {
                font-size: 95px;
            }
        }
    `
    return (
        <H1 className={props.titleClass}>{props.title}</H1>
    )
}

export default title