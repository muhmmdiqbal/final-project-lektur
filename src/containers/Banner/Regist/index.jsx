import React from 'react';
import { Jumbotron, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../components/style/App.css';

const Regist = () => {
    return (
        <Jumbotron fluid className="jumbotronBot">
            <Container>
                <div data-aos="fade">
                    <h1>Create your own class</h1>
                    <Link to="/SignTeacher">
                        <Button variant="dark" href="#Teacher">Register now</Button>
                    </Link>
                </div>
            </Container>
        </Jumbotron>
    )
}

export default Regist;