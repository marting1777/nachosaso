import React, { Component } from 'react'
import firebase from '../../Firebase'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    login = event => {
        event.preventDefault()
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(u => {

            })
            .catch(err => {
                console.error('Unable to login: ', err)
            })
        this.props.history.push('/admin')
    }

    signUp = event => {
        event.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch(err => {
                console.error('Unable to login: ', err)
            })
        this.props.history.push('/admin')
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <form>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input value={this.state.email} onChange={this.handleChange} type="email" name="email" placeholder="Email Address" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="Password" />
                </div>
                <button type="submit" onClick={this.login}>Login</button>
                <button onClick={this.signUp}>Sign Up</button>
            </form>
        )
    }
}

export default Login