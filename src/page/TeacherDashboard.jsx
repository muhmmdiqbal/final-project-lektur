import React, { useEffect } from "react";
import {Row, Col, Image, Button } from 'react-bootstrap'
import '../App.css'
import logo from '../components/assets/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { dataUserLoggedIn, dataCourse } from '../store/actions/users'
import { selectCurrentUser } from '../App';
import axios from 'axios'
import { 
    Link
  } from 'react-router-dom';

// class TeacherDashboard extends Component {
//     constructor(){
//         super()
//         this.state = {
//             items: []
//         }
//     }


//     componentDidMount(){
//         fetch("https://randomuser.me/api/?results=1&nat=de")
//         .then(res => res.json())
//         .then(parsedJSON => parsedJSON.results.map(data => (
//           {
//             thumbnail: `${data.picture.large}`,
//             name: `${data.name.first}`,
//             email : `${data.email}`
//           }
//         )))
//         .then(items => this.setState({
//           items,
//           isLoaded: false
//         }))
//         .catch(error => console.log('parsing failed', error))
//     }
//     render() {
//         const {items } = this.state;
const TeacherDashboard = () => {
    const userData = useSelector (state => state.user)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(dataUserLoggedIn());
    }, []);
    const courseData = useSelector (state => state.course)
    // const dispatch = useDispatch();
    useEffect(() => {
      dispatch(dataCourse());
    }, []);
    console.log(courseData, 'item course')
    console.log(userData, 'item user')

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
                            
                            <a>Edit Profile</a>
                        </div>
                    </div>
                </Col>
                    <Col>
                        <div className='coursesBox'>
                                <div className='coursesBoxUnderline'>
                                    <Row className='coursesBoxRow'>
                                        <h3>Courses</h3>
                                        <div className='tombolCourse'>
                                            <Button as={Link} to="/Course" className="accButton">New Course</Button>
                                        </div>
                                    </Row>
                                </div>
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
                                                <p className='keterangan'>{courseData.lesson} Lesson materials</p>
                                                <p className='enrolledStatus'>{courseData.enrolled} Students endrolled</p>
                                            </div>
                                        </Col>
                                        <Col className='mt-3'>
                                            <div className='teacherButtons'>
                                                    <Button className='inviteButton' variant="outline-warning">Invite</Button>
                                                    <Button className='editButton' variant="warning">Edit</Button>
                                            </div>
                                        </Col>
                                    </Row>
                        <br/>

                                </Col>
                                
                                        ))}

                            </div>
                    </Col>
                    
                    
                </Row>
            </div>
        
        </div>
    )
}

export default TeacherDashboard