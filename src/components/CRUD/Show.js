import React, { Component } from 'react'
import firebase from '../../Firebase'
import { Link } from 'react-router-dom'

class Show extends Component {

    constructor(props) {
        super(props)
        this.state = {
            noticia: {},
            key: ''
        }
    }

    componentDidMount() {
        const ref = firebase.firestore().collection('noticia').doc(this.props.match.params.id)
        ref.get().then(doc => {
            if (doc.exists) {
                this.setState({
                    noticia: doc.data(),
                    key: doc.id,
                    isLoading: false
                })
            } else {
                console.log('No such document!')
            }
        })
    }

    delete(id) {
        firebase.firestore().collection('noticia').doc(id).delete().then(() => {
            console.log('Document successfully deleted!')
            this.props.history.push('/admin')
        })
        .catch(err => {
            console.error('Error removing document: ', err)
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h4><Link to="/admin">Noticia List</Link></h4>
                    <h3>{this.state.noticia.title}</h3>
                </div>
                <div>
                    <dl>
                        <dt>Title:</dt>
                        <dd>{this.state.noticia.title}</dd>
                        <dt>Subtitle:</dt>
                        <dd>{this.state.noticia.subtitle}</dd>
                    </dl>
                    <Link to={`/edit/${this.state.key}`}>Edit</Link>&nbsp;
                    <button onClick={this.delete.bind(this, this.state.key)}>Delete</button>
                </div>
            </div>
        )
    }
}

export default Show