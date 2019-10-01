import React, { Component } from 'react'
import classes from './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/UI/Navbar/Navbar'
import SideDrawer from './components/UI/SideDrawer/SideDrawer'
import Backdrop from './components/UI/Backdrop/Backdrop'
import Home from './components/Home/Home'
import ElProyecto from './components/ElProyecto/ElProyecto'
import Hitos from './components/Hitos/Hitos'
import SobreMi from './components/SobreMi/SobreMi'
import ContenidoYRedes from './components/ContenidoYRedes/ContenidoYRedes'
import Blog from './components/Blog/Blog'
import Recursos from './components/Recursos/Recursos'
import NoMatch from './components/NoMatch/NoMatch'

class App extends Component {

    state = {
        sideDrawerOpen: false
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        })
    }

    backdropClickedHandler = () => {
        this.setState({sideDrawerOpen: false})
    }

    render () {
        let backdrop
        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickedHandler}/>
        }

        return (
            <Router>
                <div className={classes.App}>
                    <Navbar drawerClickedHandler={this.drawerToggleClickHandler}/>
                    <SideDrawer 
                        show={this.state.sideDrawerOpen} 
                        click={this.backdropClickedHandler}/>
                    {backdrop}
                    <Switch>
                        <Route path="/recursos" exact component={Recursos}/>
                        <Route path="/contenido-y-redes" exact component={ContenidoYRedes}/>
                        <Route path="/sobre-mi" exact component={SobreMi}/>
                        <Route path="/blog" exact component={Blog}/>
                        <Route path="/hitos" exact component={Hitos}/>
                        <Route path="/el-proyecto" exact component={ElProyecto}/>
                        <Route path="/" exact component={Home}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App
