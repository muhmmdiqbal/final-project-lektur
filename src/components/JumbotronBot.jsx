import React from 'react' 
import { Jumbotron, Button, Container } from 'react-bootstrap'
import '../App.css'

const enroll = () => {
    return (
    <div>
        <Jumbotron fluid>
            <Container>
                <h1>Create your own class</h1>
                <p>
                    <Button variant="dark">Register now</Button>
                </p>
            </Container>
        </Jumbotron>
    </div>
    )
}

export default enroll