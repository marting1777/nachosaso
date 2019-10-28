import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import firebase from './Firebase'

import Aux from './hoc/Auxiliar/Auxiliar'

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

import Login from './components/User/Login'
import MainCrud from './components/CRUD/MainCrud'
import Edit from './components/CRUD/Edit'
import Create from './components/CRUD/Create'
import Show from './components/CRUD/Show'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {},
            sideDrawerOpen: false        
        }
    }

    componentDidMount() {
        this.authListener()
    }

    authListener = () => {
        firebase.auth().onAuthStateChanged(user => {
            user ? this.setState({ user }) : this.setState({ user: null })
        })
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
        const AppContainer = styled.div `
            font-family: 'Titillium Web', sans-serif;
            height: 100%;
            font-size: 18px;
        `

        let backdrop
        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickedHandler}/>
        }

        return (
            <Router>
                <AppContainer>
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

                        {this.state.user ? (
                            <Aux>
                                <Route path='/admin' component={MainCrud} />
                                <Route path='/edit/:id' component={Edit} />
                                <Route path='/create' component={Create} />
                                <Route path='/show/:id' component={Show} />
                            </Aux>
                        ) : null}
                        
                        <Route path="/login" exact component={Login}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </AppContainer>
            </Router>
        )
    }
}

export default App
