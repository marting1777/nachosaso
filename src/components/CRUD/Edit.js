import React, { Component } from 'react'
import firebase from '../../Firebase'
import { Link } from 'react-router-dom'

class Edit extends Component {

    constructor(props) {
        super(props)
        this.state = {
            key: '',
            title: '',
            subtitle: '',
            description: '',
            mediaElement: '',
            body: ''
        }
    }

    componentDidMount() {
        const ref = firebase.firestore().collection('noticia').doc(this.props.match.params.id)
        ref.get().then(doc => {
            if (doc.exists) {
                const noticia = doc.data()
                this.setState({
                    key: doc.id,
                    title: noticia.title,
                    subtitle: noticia.subtitle,
                    description: noticia.description,
                    mediaElement: noticia.mediaElement,
                    body: noticia.body,
                })
            } else {
                console.log('No such document!')
            }
        })
    }

    onChange = event => {
        const state = this.state
        state[event.target.name] = event.target.value
        this.setState({ noticia: state })
    }

    onSubmit = event => {
        event.preventDefault()
        const { title, subtitle, description, mediaElement, body } = this.state

        const updateRef = firebase.firestore().collection('noticia').doc(this.state.key)
        updateRef.set({
            title,
            subtitle,
            description,
            mediaElement,
            body
        }).then(docRef => {
            this.setState({
                key: '',
                title: '',
                subtitle: '',
                description: '',
                mediaElement: '',
                body: ''
            })
            this.props.history.push(`/show/${this.props.match.params.id}`)
        })
        .catch(err => {
            console.error('Error adding document: ', err)
        })
    }

    render() {
        return (
            <div>
                <h3>EDIT BOARD</h3>
                <div>
                    <h4><Link to={`/show/${this.state.key}`}>Board List</Link></h4>
                    <form onSubmit={this.onSubmit}>
                        <div>
                            <label for="title">Title:</label>
                            <input type="text" class="form-control" name="title" value={this.state.title} onChange={this.onChange} placeholder="Title" />
                        </div>
                        <div>
                            <label for="subtitle">Subtitle:</label>
                            <input type="text" class="form-control" name="subtitle" value={this.state.subtitle} onChange={this.onChange} placeholder="Subtitle" />
                        </div>
                        <div>
                            <label for="description">Description:</label>
                            <input type="text" class="form-control" name="description" value={this.state.description} onChange={this.onChange} placeholder="Description" />
                        </div>
                        <div>
                            <label for="mediaElement">Media Element:</label>
                            <input type="text" class="form-control" name="mediaElement" value={this.state.mediaElement} onChange={this.onChange} placeholder="Media Element" />
                        </div>
                        <div>
                            <label for="body">Body:</label>
                            <input type="text" class="form-control" name="body" value={this.state.body} onChange={this.onChange} placeholder="Body" />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Edit