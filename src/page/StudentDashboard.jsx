import React, { useEffect, useState } from "react";
import {Row, Col, Image, Button, Tab, Tabs, Modal } from 'react-bootstrap'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux';
import { enrolledCourse } from '../store/actions/users'
import userLogo from '../components/assets/user.png'
import { 
    Link
  } from 'react-router-dom';
const StudentDashboard = (props) => {
    const userData = useSelector (state => state.user)
    const enrolledmentResult = useSelector (state => state.enrolledResult)
    const dispatch = useDispatch();
    const [ show, setShow ] = useState(false);
    const [key, setKey] = useState('course');
    const handleClose = () => setShow(false);
    useEffect(() => {
        dispatch(enrolledCourse());
      }, []);
      console.log(userData, 'data siswa')
      console.log(enrolledmentResult, 'status enroll')
    const handleSubmit = (_id, status, title) => e => {
        e.preventDefault();
        if (status === 'pending'){
            setShow(true)
        } else if (status === 'completed') {
            window.location.href =`/CourseContent/${title}/${_id}`
        }
        }
    return (
        <div> 
            <div className='TeacherDashboard'>  
                <Row className='dashboardTeacherRow'>
                    <Col className='profileCardTeacherCol'>
                        <div className='profileCardTeacher'>
                                <Image className="imageProfile" src={userLogo, userData.image} roundedCircle/>
                            <br/>
                            <br/>
                            <div className='aboutDashboard'>
                                <h3>{userData.name}</h3>
                                <p>{userData.email}</p>
                                <a href="">Edit Profile</a>
                            </div>
                        </div>
                    </Col>
                    <Col className='courseCardCol'>
                        <div className='coursesBox '>
                        <Tabs
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="dashboardTabs"
                        fill
                        >
                            <Tab eventKey="course" title="Course">
                                <div className='coursesInside'>
                                <Modal show={show} onHide={handleClose} closeButton>    
                                <Modal.Body>
                                    <div className='closeTextModal'>
                                        <button onClick={handleClose}>close</button>
                                    </div>
                                    <h5>Can't join class</h5>
                                    <div>Please wait coresponding teacher approve you!</div>
                                </Modal.Body>
                                </Modal>
                                {enrolledmentResult.map((enrolledResult, idx) => (
                                        <Col className='coursesBoxCol mt-5' key={idx}>
                                            <Row className='allCourses'>    
                                                <Col className='imageCourse'>
                                                    <div>
                                                        <img className="imageTeacherDashboard" src={enrolledResult.course.image}/>
                                                    </div>
                                                </Col>
                                                <Col className='coursesLists m-3'> 
                                                    <div>
                                                        <h5>{enrolledResult.course.title}</h5>
                                                        <p className='keterangan text-muted'>By {enrolledResult.teacher.name}</p>
                                                        <br/>
                                                        <Link onClick={handleSubmit (enrolledResult.course._id, enrolledResult.status, enrolledResult.course.title)}>See course material</Link>
                                                    </div>
                                                </Col>
                                                <Col className='mt-3'>
                                                <div class="progress">
                                                    <div class="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                </Col>
                                            </Row>
                                        <br/>
                                        </Col>
                                ))}
                                </div>
                                </Tab>
                                <Tab eventKey="assesments" title="Assesments">
                                <div className='coursesInside'>
                                        <Col className='coursesBoxCol mt-5'>
                                            <Row className='allCourses sm-2'>
                                                <Col className='coursesLists m-3'> 
                                                    <div>
                                                        <h5>titel</h5>
                                                        <br/>
                                                        <p className='keterangan text-muted'>By </p>
                                                    </div>
                                                </Col>
                                                <Col className='mt-3'>
                                                <div className='teacherButtons'>
                                                    <p className='text-muted'><i>No result yet</i></p>
                                                    <Button className='inviteButton' variant="outline-warning">Take Test</Button>
                                                </div>
                                                </Col>
                                            </Row>
                                        <br/>
                                        </Col>
                                </div>
                                </Tab>
                        </Tabs>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default StudentDashboard