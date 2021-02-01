import React from 'react' 
import { Jumbotron, Button, Container } from 'react-bootstrap'
import '../App.css'

const enroll = () => {
    return (
    <div>
        <Jumbotron fluid className="jumbotronBot">
            <Container>
                <div className='judulJumbotronBottom'>
                    <h1>Create your own class</h1>
                    <Button variant="dark" href="#Teacher">Register now</Button>
                </div>
            </Container>
        </Jumbotron>
    </div>
    )
}

export default enroll