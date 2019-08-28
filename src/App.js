import React, { Component } from 'react'
import classes from './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/UI/Navbar/Navbar'
import Home from './components/Home/Home'
import ElProyecto from './components/ElProyecto/ElProyecto'
import Hitos from './components/Hitos/Hitos'
import SobreMi from './components/SobreMi/SobreMi'
import ContenidoYRedes from './components/ContenidoYRedes/ContenidoYRedes'
import Recursos from './components/Recursos/Recursos'

class App extends Component {
    render () {
        return (
            <Router>
                <div className={classes.App}>
                        <Navbar />

                        <Route path="/recursos" exact component={Recursos}/>
                        <Route path="/contenido-y-redes" exact component={ContenidoYRedes}/>
                        <Route path="/sobre-mi" exact component={SobreMi}/>
                        <Route path="/hitos" exact component={Hitos}/>
                        <Route path="/el-proyecto" exact component={ElProyecto}/>
                        <Route path="/" exact component={Home}/>
                </div>
            </Router>
        )
    }
}

export default App
