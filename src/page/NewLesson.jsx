import React from 'react'
import { Container, Button, Form, Row, Col } from 'react-bootstrap'
import NavCourse from './NavCourse'

const newLesson = () => {
    return (
        <div>
        <NavCourse />
        <Container>
        <h4>React JS Basic</h4>
        <p>Nascetur consequat quam tellus sed convallis amet, nunc. Venenatis, eget faucibus iaculis facilisi pellentesque eleifend mattis vel. Nunc euismod morbi lectus aliquam pretium, pharetra, tellus orci. Lobortis at nulla dictum risus amet. Nunc dolor sit vitae arcu facilisis eu. Tortor, turpis arcu in est. Ullamcorper fringilla ut tempus nulla dolor lorem proin porta neque. Neque eu lorem ultrices id. Et mattis lacus fermentum id nec, aenean enim, curabitur. Enim, donec quis odio ut enim scelerisque id erat laoreet. Vitae sodales rhoncus, et ut ut. Amet, porttitor adipiscing nullam mauris. Lobortis interdum imperdiet mauris pharetra risus proin etiam est.</p>
        <br /><hr />
        <h4>Content*</h4><br/>
        
            <div className="containerLesson">
            <Container>

                <div>

                    <br />
                        <h5>Lesson #1</h5>
                        <Row>
                            <Col>
                            <Form><br />
                            <div className="containerForm">
                            <input className="formInput" type="text" id="fname" name="fname" placeholder="Title"></input>
                                </div><br/>
                                <div className="containerForm">
                                    <input className="formInput" type="text" id="fname" name="fname" placeholder="Description"></input>
                                </div>
                            </Form>
                            </Col>
                            <Col>
                            <Button variant="dark">Upload Video</Button>
                            <Form.Text className="text-muted">
                            <i>Required. Max. size 200 MB. Supported format .mp4</i>
                            </Form.Text><br/>
                            <Button variant="outline-dark">Add Lesson Material</Button>
                            <Form.Text className="text-muted">
                            <i>Max. size 20 MB. Supported format .pdf</i>
                            </Form.Text><br/><br/><br/><br/>
                            <div className="loginButton">
                                <Button className="accButton" type="submit" class="btn btn-link" href="#Course">Save</Button>
                            </div><br/>
                            </Col>
                        </Row>
                        
                </div>
                
                </Container>

            </div>
            <br />
            <p><a href="#NewLesson">Add New Lesson</a></p>
            <div className="loginButton">
                            <Button className="accButton" type="submit" class="btn btn-link" href="#Filled">Publish Course</Button>
                        <p><a href="#Course">Delete Course</a></p>

                        </div>
        </Container>
        </div>
    )
}

export default newLesson