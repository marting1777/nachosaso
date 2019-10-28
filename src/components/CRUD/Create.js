import React, { Component } from 'react'
import firebase from '../../Firebase'
import { Link } from 'react-router-dom'

class Create extends Component {

    constructor() {
        super()
        this.ref = firebase.firestore().collection('noticia')
        this.state = {
            title: '',
            subtitle: '',
            description: '',
            mediaElement: '',
            body: ''
        }
    }

    onChange = event => {
        const state = this.state
        state[event.target.name] = event.target.value
        this.setState(state)
    }

    onSubmit = event => {
        event.preventDefault()

        const { title, subtitle, description, mediaElement, body } = this.state
        this.ref.add({
            title,
            subtitle,
            description,
            mediaElement,
            body
        }).then(docRef => {
            this.setState({
                title: '',
                subtitle: '',
                description: '',
                mediaElement: '',
                body: ''
            })
            this.props.history.push('/admin')
        })
        .catch(err => {
            console.error('Error adding document: ', err)
        })
    }

    render() {
        const { title, subtitle, description, mediaElement, body } = this.state
        return (
            <div>
                <h3>Add Noticia</h3>
                <h4><Link to="/admin">Noticias List</Link></h4>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input type="text" name="title" value={title} onChange={this.onChange} placeholder="Title" />
                    </div>
                    <div>
                        <label htmlFor="subtitle">Subtitle:</label>
                        <input type="text" name="subtitle" value={subtitle} onChange={this.onChange} placeholder="Subtitle" />
                    </div>
                    <div>
                        <label htmlFor="description">Description:</label>
                        <textArea name="description" onChange={this.onChange} placeholder="Description" cols="80" rows="3">{description}</textArea>
                    </div>
                    <div>
                        <label htmlFor="mediaElement">Media Element:</label>
                        <input type="text" name="mediaElement" value={mediaElement} onChange={this.onChange} placeholder="Media Element" />
                    </div>
                    <div>
                        <label htmlFor="body">Body:</label>
                        <textArea name="body" onChange={this.onChange} placeholder="Body" cols="80" rows="3">{body}</textArea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Create