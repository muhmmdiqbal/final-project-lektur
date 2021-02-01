import React, { useEffect, useState } from "react";
import {Row, Col, Image, Button, Tab, Tabs } from 'react-bootstrap'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux';
import { dataUserLoggedIn, dataCourse } from '../store/actions/users'
import { 
    Link
  } from 'react-router-dom';
import NavStudent from './NavStudent'
const StudentDashboard = () => {
    const userData = useSelector (state => state.user)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(dataUserLoggedIn());
    }, []);

    const courseData = useSelector (state => state.course)
    useEffect(() => {
      dispatch(dataCourse());
    }, []);

    const [key, setKey] = useState('course');

    console.log(userData);
    return (
        <div> 
            <div className='TeacherDashboard'>  
                <Row className='dashboardTeacherRow'>
                    <Col className='profileCardTeacherCol'>
                    
                        <div className='profileCardTeacher'>
                                <Image className="imageProfile" src={userData.image} roundedCircle/>
                            <br/>
                            <br/>
                            <div className='aboutDashboard'>
                                <h3>{userData.name}</h3>
                                <p>{userData.email}</p>
                                
                                <a href="">Edit Profile</a>
                            </div>
                        </div>
                    
                    </Col>
                    <Col>
                        <div className='coursesBox'>
                        {/* <NavStudent /> */}
                        <Tabs
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="dashboardTabs"
                        fill
                        >
                        <Tab eventKey="course" title="Course">
                        {courseData.map((courseData) => (
                                <Col className='coursesBoxCol mt-5'>
                                    <Row className='allCourses sm-2'>
                                        
                                            
                                        <Col className=''>
                                            <div>
                                                <img className="imageTeacherDashboard" src={courseData.image}/>
                                            </div>
                                        </Col>
                                        <Col className='coursesLists m-3'> 
                                            <div>
                                                <h5>{courseData.title}</h5>
                                                <br/>
                                                <p className='keterangan text-muted'>By {courseData.user.name}</p>
                                                <p className='keterangan text-muted'>By {courseData.updated_at}</p>
                                            </div>
                                        </Col>
                                        <Col className='mt-3'>
                                            
                                        </Col>
                                    </Row>
                        <br/>

                                </Col>
                                
                                        ))}
                        </Tab>
                        <Tab eventKey="assesments" title="Assesments">
                        {courseData.map((courseData) => (
                                <Col className='coursesBoxCol mt-5'>
                                    <Row className='allCourses sm-2'>
                                        <Col className='coursesLists m-3'> 
                                            <div>
                                                <h5>{courseData.title}</h5>
                                                <br/>
                                                <p className='keterangan text-muted'>By {courseData.user.name}</p>
                                            </div>
                                        </Col>
                                        <Col className='mt-3'>
                                        <div className='teacherButtons'>
                                        <p className='text-muted'><i>No result yet</i></p>

                                        <Button className='inviteButton' variant="outline-warning">Take Test</Button>
                                                    {/* <Button className='editButton' variant="warning">Edit</Button> */}
                                        </div>
                                        </Col>
                                    </Row>
                        <br/>

                                </Col>
                                
                                        ))}
                        </Tab>
                        </Tabs>

                                

                            </div>
                    </Col>
                            
                    
                    
                </Row>
            </div>
        {/* );
    }) : null */}
  
        </div>
    )
}

export default StudentDashboard