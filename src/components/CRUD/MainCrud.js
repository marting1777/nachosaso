import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import firebase from '../../Firebase'
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

class MainCrud extends Component {

    constructor(props) {
        super(props)
        this.ref = firebase.firestore().collection('noticia')
        this.unsubscribe = null
        this.state = {
            noticias: []
        }
    }

    onCollectionUpdate = querySnapshot => {
        const noticias = []
        querySnapshot.forEach(doc => {
            const {title, subtitle, description, mediaElement, body} = doc.data()
            noticias.push({
                key: doc.id,
                doc,
                title,
                subtitle,
                description,
                mediaElement,
                body,
            })
        })
        this.setState({ noticias })
    }
    
    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
    }

    render() {
        const noticiasList = this.state.noticias.map(noticia => {
            return  <Paper style={{padding: '10px', margin: '20px 0'}}>
                        <h3>{noticia.title}</h3>
                        <td><Link to={`/show/${noticia.key}`}>{noticia.title}</Link></td>
                    </Paper>
        })

        return (
            <Container>
                {noticiasList}
            </Container>
        )
    }
}

export default MainCrud