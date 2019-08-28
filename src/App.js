import React, { Component } from 'react'
import classes from './App.css'

import Navbar from './components/UI/Navbar/Navbar'

class App extends Component {
    render () {
        return (
            <div className={classes.App}>
                <Navbar />
            </div>
        )
    }
}

export default App
