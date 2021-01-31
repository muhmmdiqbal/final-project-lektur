import React from 'react';
import { Card, Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../components/style/App.css';

import Header from '../../../components/Navbar/Header';
import Footer from '../../../components/Footer';

const Login = () => {
    return (
        <React.Fragment>
            <Header />
            <Container className="container-login" fluid>
                <Card>
                    <Card.Title>
                        <h4>Welcome Back!</h4>
                        <p>Login to your account</p>
                    </Card.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label>Email<span>*</span></Form.Label>
                            <Form.Control className="formInput" type="email" id="email" name="email" placeholder="john@doe.com" required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password<span>*</span></Form.Label>
                            <Form.Control className="formInput" type="password" id="password" name="password" placeholder="********" required />
                            <Card.Text className="float-right">
                                <a href="/">Forgot Password</a>
                        </Card.Text>
                        </Form.Group>
                        <Button className="float-right" type="submit">Login</Button>
                        <Form.Group>
                            <Card.Text className="new">New user? <Link to="/Signup">Create an account</Link></Card.Text>
                        </Form.Group>
                    </Form>
                </Card>
            </Container>
            <Footer />
        </React.Fragment>
    )
}

export default Login;