import React from 'react'
import NavCourse from './NavCourse'
import { Container, Button, Form, Row, Col } from 'react-bootstrap'


const assesment = () => {
    return (
        <div>
        <NavCourse />
        <Container>
        <h4>Question</h4><br/>
            <div className="containerLesson">
            <Container>
                <div>
                    <br />
                        <h5>#1</h5>
                        <div className="containerForm">
                            <input className="formInput" type="text" id="fname" name="fname" placeholder="Question"></input>
                        </div>
                        <Row>
                            <Col>
                            <Form><br />
                                <div className="containerForm">
                                <input className="formInput" type="text" id="fname" name="fname" placeholder="Option"></input>
                                </div><br/>
                                <div className="containerForm">
                                <input className="formInput" type="text" id="fname" name="fname" placeholder="Option"></input>
                                </div><br/>
                                <div className="containerForm">
                                <input className="formInput" type="text" id="fname" name="fname" placeholder="Option"></input>
                                </div><br/>
                            </Form>
                            </Col>
                            <Col>
                            <Form><br />
                                <div className="containerForm">
                                <input className="formInput" type="text" id="fname" name="fname" placeholder="Explain here.."></input>
                                </div><br/>
                            </Form>
                            </Col>
                        </Row>
                <Button variant="outline-warning">Add More Option</Button><br /><br />        
                </div>
            </Container>
                        </div>
                        <br />
                        <p><a href="NewLesson">Add New Lesson</a></p>
                        <div className="loginButton">
                            <Button className="accButton" type="submit" class="btn btn-link" href="Filled">Save Exam</Button>
                        </div>
        </Container>
        </div>
    )
}

export default assesment