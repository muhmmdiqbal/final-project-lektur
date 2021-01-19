import React, { Component } from "react";
import {Row, Col, Image, Button } from 'react-bootstrap'
import '../App.css'
import logo from '../components/assets/logo.png'
import axios from 'axios'

class TeacherDashboard extends Component {
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
              const {thumbnail} = item;
               return (
            <div className='TeacherDashboard'>  
                <Row className='dashboardTeacherRow'>
                    <div className='profileCardTeacher'>
                        <div className='avatar'>
                            <Image src={thumbnail} roundedCircle className='avatar'/>
                        </div>
                        <div>
                            <h4>Name</h4>
                            <p>email</p>
                        </div>
                        <br/>
                        <a>Edit Profile</a>
                    </div>
                    <div className='coursesBox'>
                        <Row className='coursesBoxRow'>
                            <h3>Courses</h3>
                            <Button>New Course</Button>
                        </Row>
                        <Col className='coursesBoxCol'>
                            <div>
                                Course 1
                            </div>
                        </Col>
                    </div>
                </Row>
                ini Teacher
            </div>
        );
    }) : null
  }
        </div>
    )
}}

export default TeacherDashboard