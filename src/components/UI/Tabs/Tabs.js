import React, { Component } from 'react'
import classes from './Tabs.css'

import Tab from './Tab/Tab'

class Tabs extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            activeTab: this.props.children[0].props.label
        }
    }

    onClickTabItem = (tab) => {
        this.setState({ activeTab: tab })
    }

    render () {

        const {
            onClickTabItem,
            props: {
                children,
            },
            state: {
                activeTab,
            }
        } = this

        return (
            <div className={classes.Tabs}>
                <ol className={classes.TabList}>
                    {children.map(child => {
                        const { label } = child.props

                        return (
                            <Tab 
                                activeTab={activeTab} 
                                key={label}
                                label={label}
                                onClick={onClickTabItem}/>
                        )
                    })}
                </ol>
                <div className={classes.TabContent}>
                    {children.map(child => {
                        if (child.props.label !== activeTab) return undefined
                        return child.props.children
                    })}
                </div>
            </div>
        )
    }
}

export default Tabs