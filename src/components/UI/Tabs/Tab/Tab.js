import React, { Component } from 'react'
import classes from './Tab.css'

class Tab extends Component {

    onClick = () => {
        const { label, onClick } = this.props
        onClick(label)
    }

    render () {

        const {
            onClick,
            props: {
                activeTab,
                label,
            },
        } = this

        let className = classes.TabListItem

        if (activeTab === label) {
            className += ` ${classes.TabListActive}`
        }

        return (
            <li className={className} onClick={onClick}>
                {label}
            </li>
        )
    }
}

export default Tab