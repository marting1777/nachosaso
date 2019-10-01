import React from 'react'

const banner = props => (
    <div className={props.bannerStyles} style={props.style}>{props.children}</div>
)

export default banner