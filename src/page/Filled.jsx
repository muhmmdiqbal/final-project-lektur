import React from 'react'
import { Container, Button, Form, Row, Col, Jumbotron,Image, ToggleButton } from 'react-bootstrap'
import NavCourse from './NavCourse'
import logo from '../components/assets/logo.png'

const newLesson = () => {
    return (
        <div>
        <NavCourse />
        <Jumbotron>
            <Container>
            <h4>React JS Basic</h4>
        <p>Nascetur consequat quam tellus sed convallis amet, nunc. Venenatis, eget faucibus iaculis facilisi pellentesque eleifend mattis vel. Nunc euismod morbi lectus aliquam pretium, pharetra, tellus orci. Lobortis at nulla dictum risus amet. Nunc dolor sit vitae arcu facilisis eu. Tortor, turpis arcu in est. Ullamcorper fringilla ut tempus nulla dolor lorem proin porta neque. Neque eu lorem ultrices id. Et mattis lacus fermentum id nec, aenean enim, curabitur. Enim, donec quis odio ut enim scelerisque id erat laoreet. Vitae sodales rhoncus, et ut ut. Amet, porttitor adipiscing nullam mauris. Lobortis interdum imperdiet mauris pharetra risus proin etiam est.</p>
       
        </Container>
        </Jumbotron>
        <Container>
        <br />
        <h4>Content*</h4><br/>
        
            <div className="containerLesson">
            <Container>
                <div>
                    <br />
                        <h5>Lesson #1  : What is React</h5>
                        <Row>
                            <Col>
                            <Form><br />
                            <div>
                            <p>Neque eu lorem ultrices id. Et mattis lacus fermentum id nec, aenean enim, curabitur. Enim, donec quis odio ut enim scelerisque id erat laoreet. Vitae sodales rhoncus, et ut ut. Amet, porttitor adipiscing nullam mauris. Lobortis interdum imperdiet mauris pharetra risus proin etiam est.</p> 
                            <br/><p>React and Open Source.pdf</p>
                            <p>Just Javascript.pdf</p>
                            </div>
                            </Form>
                            </Col>
                            <Col>
                            <Image className='logo' src={logo} alt='logo app' fluid />
                            </Col>
                        </Row>
                </div>
                </Container>
            </div><br />
            <div className="containerLesson">
            <Container>
                <div>
                    <br />
                        <h5>Lesson #1  : What is React</h5>
                        <Row>
                            <Col>
                            <Form><br />
                            <div>
                            <p>Neque eu lorem ultrices id. Et mattis lacus fermentum id nec, aenean enim, curabitur. Enim, donec quis odio ut enim scelerisque id erat laoreet. Vitae sodales rhoncus, et ut ut. Amet, porttitor adipiscing nullam mauris. Lobortis interdum imperdiet mauris pharetra risus proin etiam est.</p> 
                            <br/><p>React and Open Source.pdf</p>
                            <p>Just Javascript.pdf</p>
                            </div>
                            </Form>
                            </Col>
                            <Col>
                            <Image className='logo' src={logo} alt='logo app' fluid/>
                            </Col>
                        </Row>
                </div>
                </Container>
            </div>
            <br />
            <p><a href="#NewLesson">Add New Lesson</a></p>
            <div className="loginButton">
                            <Button className="accButton" type="submit" class="btn btn-link" href="#Detail">Save Change</Button>
                        <p><a href="#Course">Delete Course</a></p>

                        </div>
        </Container>
        </div>
    )
}

export default newLesson