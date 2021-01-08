import React from 'react' 
import { Jumbotron, Button, Container } from 'react-bootstrap'
import '../App.css'

const enroll = () => {
    return (
        <div>
            <Jumbotron fluid>
            <Container>
            
                
                
            <h1>Create your own class</h1>
            {/* <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p> */}
            <p>
                <Button variant="dark">Register now</Button>
            </p>
            
            </Container>

            </Jumbotron>
        </div>
    )
}

export default enroll