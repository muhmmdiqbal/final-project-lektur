import React, { Component, Fragment } from 'react';
// import Detail from '../page/Detail'
import { Card, Container, CardDeck } from 'react-bootstrap'
import axios from 'axios'
// import { 
//     Switch,
//     Route,
//     Link
//   } from 'react-router-dom';

class learnCard extends Component {
    constructor(){
        super()
        this.state = {
          data: []
        }
    }

    componentDidMount(){
        axios.get("https://lektur.kuyrek.com/courses/all")
    .then(res => { console.log(res, 'TS2')
        const data = res.data.data
        this.setState({data});
    })
    .catch(err => console.log('parsing data is failed, err'))

    }

render() {
    const{data} = this.state
    console.log(data, 'CH')
    return (
    <div>
        <Container className="cardList">
            <CardDeck>
                <Card>
                    
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>apa aja
                        <small className="text-muted"> By John Doe</small>
                    </Card.Title>
                    <Card.Text>
                        Vestibulum fusce parturient urna a molestie orci. Lectus id quisque amet et vel elementum morbi cursus. Amet sagittis semper mauris diam orci facilisis...
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Art & Humanity</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Create Cinematic Music Video
                        <small className="text-muted"> By John Doe</small>
                    </Card.Title>
                    <Card.Text>
                        Vestibulum fusce parturient urna a molestie orci. Lectus id quisque amet et vel elementum morbi cursus. Amet sagittis semper mauris diam orci facilisis...
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Art & Humanity</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Create Cinematic Music Video
                        <small className="text-muted"> By John Doe</small>
                    </Card.Title>
                    <Card.Text>
                        Vestibulum fusce parturient urna a molestie orci. Lectus id quisque amet et vel elementum morbi cursus. Amet sagittis semper mauris diam orci facilisis...
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Art & Humanity</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title><a href="#Detail" className="Judul stretched-link">Create Cinematic Music Video</a>
                            <small className="text-muted"> By John Doe</small>
                        </Card.Title>
                    <Card.Text>
                        Vestibulum fusce parturient urna a molestie orci. Lectus id quisque amet et vel elementum morbi cursus. Amet sagittis semper mauris diam orci facilisis...
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Art & Humanity</small>
                    </Card.Footer>
                </Card>
            </CardDeck><br /><br /><br />
        </Container> 
        
    </div>
    )
}
}
export default learnCard