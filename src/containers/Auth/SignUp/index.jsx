import React from 'react';
import { Card, Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../components/style/App.css';

import Header from '../../../components/Navbar/Header';
import Footer from '../../../components/Footer';

const SignUp = () => {
    return (
        <React.Fragment>
            <Header />
            <Container className="container-login" fluid>
                <Card data-aos="fade">
                    <Card.Title>
                        <h4>Start Learning!</h4>
                        <p>Create your account</p>
                    </Card.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name<span>*</span></Form.Label>
                            <Form.Control className="formInput" type="text" id="name" name="name" placeholder="John Doe" required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email<span>*</span></Form.Label>
                            <Form.Control className="formInput" type="email" id="email" name="email" placeholder="john@doe.com" required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password<span>*</span></Form.Label>
                            <Form.Control className="formInput" type="password" id="password" name="password" placeholder="********" required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Confirm Password<span>*</span></Form.Label>
                            <Form.Control className="formInput" type="password" id="password" name="password" placeholder="********" required />
                        </Form.Group>
                        <Button type="submit">Sign Up</Button>
                        <Form.Group>
                            <Card.Text href="/" className="new">Already have account? <Link to="/Login">Login</Link></Card.Text>
                        </Form.Group>
                    </Form>
                </Card>
            </Container>
            <Footer />
        </React.Fragment>
    )
}

export default SignUp;