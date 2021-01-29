import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { dataStudent } from '../store/actions/users'
import NavCourse from './NavCourse'
import { Container, Button, Form, Row, Col } from 'react-bootstrap'


const Students = () => {

    const studentData = useSelector (state => state.student)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(dataStudent());
    }, []);
    console.log(studentData, 'item student')

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
                                {/* <div className="containerForm">
                                <input className="formInput" type="text" id="fname" name="fname" placeholder="Choose one"></input>
                                </div> */}
                                <Form.Control as="select">
                                    <option>Choose one</option>
                                </Form.Control>
                                <br/>
                                <h4>Sort</h4>
                                {/* <div className="containerForm"> */}
                                {/* <input  className="formInput" type="dropdown" id="sort" name="cars" placeholder="Choose one"></input> */}
                                <Form.Control as="select">
                                    <option>Choose one</option>
                                </Form.Control>
                                {/* </div> */}
                                <br/>
                        </Form>         
                </div>
            </Container>
            </div>
        </Col>
        <Col xs={12} md={8}>
            <div className="containerLesson">
        
            <Container>
                <div>
                    <br />
                    <Row><Col>
                    <h5>Students</h5>
                    </Col>
                        <Col>
                        <div className="loginButton">
                            <Button className="accButton" type="submit" class="btn btn-link" href="#Filled">Save Exam</Button>
                        </div>
                        </Col>
                        </Row><hr /> 
                        {studentData.map((studentData) => (
                        <Row>
                        <Col>
                        <div>
                        <h3>{studentData.user.name}</h3>
                        <p>{studentData.status}</p>
                        </div>
                        </Col> 
                        <Col>
                        <div>
                        <h3>{studentData.totalLessonComplete}</h3>
                        </div>
                         </Col> 
                        </Row> 
                        ))}  

                </div>
            
            </Container>
            </div>
        </Col>
        </Row>

        </Container>
        </div>
    )
}

export default Students