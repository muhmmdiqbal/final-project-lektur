import React from 'react'
import NavCourse from './NavCourse'
import { Container, Button, Form, Row, Col } from 'react-bootstrap'


const students = () => {
    return (
        <div>
        <NavCourse />

        <Container>
        <Row>
            <Col xs={6} md={4}>
            <div className="containerLesson">
        
            <Container>
                <div>
                    <br />
                        <Form>
                                <div className="containerForm">
                                <input className="formInput" type="text" id="fname" name="fname" placeholder="Search"></input>
                                </div><br/>
                                <h4>Filter</h4>
                                <div className="containerForm">
                                <input className="formInput" type="text" id="fname" name="fname" placeholder="Choose one"></input>
                                </div><br/>
                                <h4>Sort</h4>
                                <div className="containerForm">
                                <input  className="formInput" type="dropdown" id="sort" name="cars" placeholder="Choose one"></input>
                                <select id="sort" name="cars" className="formInput">
                                    <option value="volvo" className="formInput">Volvo</option>
                                    {/* <option value="saab">Saab</option>
                                    <option value="fiat">Fiat</option>
                                    <option value="audi">Audi</option> */}
                                </select>
                                </div><br/>
                        </Form>         
                </div>
            </Container>
            </div>
        </Col>
        <Col xs={12} md={8}>
            <div className="containerLesson">
        
            <Container>
                <div>
                    <br /><Row><Col>
                    <h5>Student</h5>
                    </Col>
                        <Col>
                        <div className="loginButton">
                            <Button className="accButton" type="submit" class="btn btn-link" href="#Filled">Save Exam</Button>
                        </div></Col>
                        </Row><hr />      
                </div>
            
            </Container>
            </div>
        </Col>
        </Row>

        </Container>
        </div>
    )
}

export default students