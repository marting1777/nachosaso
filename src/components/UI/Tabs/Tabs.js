import React, { Component } from 'react'
import styled from 'styled-components'

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

        const TabContent = styled.div `
            text-align: center;
        `

        const TabList = styled.ol `
            border-bottom: 1px solid #ccc;
            padding-left: 0;
        `

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
            <div>
                <TabList>
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
                </TabList>
                <TabContent>
                    {children.map(child => {
                        if (child.props.label !== activeTab) return undefined
                        return child.props.children
                    })}
                </TabContent>
            </div>
        )
    }
}

export default Tabs