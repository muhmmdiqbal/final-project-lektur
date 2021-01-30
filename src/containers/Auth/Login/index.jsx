import React from 'react';
import { Card, Container, Form } from 'react-bootstrap';

const Login = () => {
    return (
        <Container className="logIn-background">
            <Card className="container-logIn">
                <Card.Title>
                <h4>Welcome Back!</h4>
                <p>Login to your account</p>
                </Card.Title>
                    <Form>
                        <p>Email*</p>
                        <div className="containerForm">
                            <input className="formInput" value={email} onChange={handleChange} type="email" id="email" name="email" placeholder="john@doe.com" required></input>
                        </div><br />
                        <p>Password*</p>
                        <div className="containerForm">
                            <input className="formInput" value={password} onChange={handleChange} type="password" id="password" name="password" placeholder="********" required></input>
                        </div>
                        <div className="forgotPass">
                            <a href="StudentDashboard">Forgot Password</a>
                        </div><br /><br />
                        <div className="loginButton">
                            <Button className="accButton" type="submit" class="btn btn-link" >Login</Button>
                        </div><br />
                        <div>New user? <a href="TeacherDashboard">Create an account</a></div>
                    </Form>
            </Card>
        </Container>
    )
}