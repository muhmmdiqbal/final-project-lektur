import React from 'react';
import { Jumbotron, Card, Button, Container, Form, Col } from 'react-bootstrap'
import '../App.css'
import logo from '../components/assets/logo.png'
import { 
    Switch,
    Route,
    Link
  } from 'react-router-dom';


function Login() {
    return(
        <div>
            <h1>Ini Login</h1>
            <Jumbotron fluid>
            <Container>
                {/* <Row> */}
                    
                    {/* <Col> */}
                    <Card style={{ width: 'center' }}>
                        <Card.Body>
                        <h1>Wellcomeback</h1>

                            <Card.Title>Login to your account</Card.Title><br/>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="john@doe.com" />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="******" />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                <Form.Label as={Link}>Forgot Password</Form.Label>
                                </Form.Group>
                                <Button variant="dark" type="submit">
                                    Login
                                </Button><br /><br />
                                <Form.Label>New user? <Form.Label as={Link}>Create an account</Form.Label></Form.Label>

                                </Form>
                        </Card.Body>
                        
                    </Card>
                    {/* </Col> */}
                {/* </Row> */}
            </Container>
        </Jumbotron>
        </div>
    )
}

export default Login;