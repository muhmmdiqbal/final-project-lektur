import React from 'react'; 
import { Jumbotron, Button, Container } from 'react-bootstrap';
import '../../../components/style/App.css';

const Regist = () => {
    return (
    <div>
        <Jumbotron fluid className="jumbotronBot">
            <Container>
                <h1>Create your own class</h1>
                <p>
                    <Button variant="dark" href="#Teacher">Register now</Button>
                </p>
            </Container>
        </Jumbotron>
    </div>
    )
}

export default Regist;