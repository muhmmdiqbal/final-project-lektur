import React, { Component } from "react";
import {Row, Col, Image, Button } from 'react-bootstrap'
import '../App.css'
import logo from '../components/assets/logo.png'
import axios from 'axios'
import { 
    Link
  } from 'react-router-dom';
import NavStudent from './NavStudent'

class StudentAssesment extends Component {
    constructor(){
        super()
        this.state = {
            items: []
        }
    }


    componentDidMount(){
        fetch("https://randomuser.me/api/?results=1&nat=de")
        .then(res => res.json())
        .then(parsedJSON => parsedJSON.results.map(data => (
          {
            thumbnail: `${data.picture.large}`,
            name: `${data.name.first}`,
            email : `${data.email}`
          }
        )))
        .then(items => this.setState({
          items,
          isLoaded: false
        }))
        .catch(error => console.log('parsing failed', error))
    }
    render() {
        const {items } = this.state;
    return (
        <div> 
             {
              items.length > 0 ? items.map(item => {
              const {thumbnail, name, email} = item;
               return (
            <div className='TeacherDashboard'>  
                <Row className='dashboardTeacherRow'>
                    <Col className='profileCardTeacherCol'>
                        <div className='profileCardTeacher'>
                                <Image src={thumbnail} roundedCircle className='avatar'/>
                            <br/>
                            <br/>
                            <div className='aboutDashboard'>
                                <h3>{name}</h3>
                                <p>{email}</p>
                                <br/>
                                <a>Edit Profile</a>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='coursesBox'>
                            <NavStudent />
                                {/* <div className='coursesBoxUnderline'>
                                    <Row className='coursesBoxRow'>
                                        <Col>
                                        <h4 className="h4student"><a href="Detail" className="Judul stretched-link">Courses</a></h4>
                                        </Col>
                                        <Col>
                                        <h4><a href="Detail" className="Judul stretched-link">Assesment</a></h4>
                                        </Col>
                                    </Row>
                                </div> */}
                                <Col className='coursesBoxCol mt-5'>
                                    <Row className='allCourses sm-2'>
                                        <Col className='m-3'>
                                            <div>
                                                <img />
                                            </div>
                                        </Col>
                                        <Col className='coursesLists m-3'> 
                                            <div>
                                                <h5>Judul</h5>
                                                <br/>
                                                <p className='keterangan'>Keterangan</p>
                                                <p className='enrolledStatus'>Enrolled status</p>
                                            </div>
                                        </Col>
                                        <Col className='mt-3'>
                                            <div className='teacherButtons'>
                                                    <Button className='inviteButton' >Invite</Button>
                                                    <Button className='editButton'>Edit</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </div>
                    </Col>
                    
                    
                </Row>
            </div>
        );
    }) : null
  }
        </div>
    )
}}

export default StudentAssesment