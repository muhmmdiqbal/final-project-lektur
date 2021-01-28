import React, { useEffect, useState } from "react";
import {Row, Col, Image, Button } from 'react-bootstrap'
import '../App.css'
import logo from '../components/assets/logo.png'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { dataUserLoggedIn, dataCourse } from '../store/actions/users'
import { selectCurrentUser } from '../App';
import { 
    Link
  } from 'react-router-dom';
import NavStudent from './NavStudent'

// class StudentDashboard extends Component {
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
const StudentDashboard = () => {
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

    console.log(userData);
    return (
        <div> 
             {/* {
              items.length > 0 ? items.map(item => {
              const {thumbnail, name, email} = item;
               return ( */}
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
                        <NavStudent />

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
                                            </div>
                                        </Col>
                                        <Col className='mt-3'>
                                            {/* <div className='teacherButtons'>
                                                    <Button className='inviteButton' variant="outline-warning">Invite</Button>
                                                    <Button className='editButton' variant="warning">Edit</Button>
                                            </div> */}
                                        </Col>
                                    </Row>
                        <br/>

                                </Col>
                                
                                        ))}

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