import React, { Component } from "react";
import {Row, Col, Image, Button, Container} from 'react-bootstrap'
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
             
        <div className='backgroundTeacher'>
        {/* <h1>ini dashboard teacher</h1> */}
        <Row> 
        
            <Col>
            {
              items.length > 0 ? items.map(item => {
              const {thumbnail} = item;
               return (
            <div className='TeacherLeft'>
                <div className='avatar'>
            <Image src={thumbnail} roundedCircle className='avatar'/>

                </div>
            <h4 className='teacher'>John Doe</h4>
            <p className='teacher'>john.doe@gmail.com</p>
            <p className='teacher'><a href="#">Edit Profile</a></p>

            </div>
            );
        }) : null}
            </Col>
            
            <Col>
            <div className='TeacherRight'>
                <Container>
                <Row>
                    <Col>
                <h2>Course</h2>
                    </Col>
                    <Col>
                <Button className="accButton" type="button" class="btn btn-link" href="#Course">New Course</Button>

                    </Col>
                </Row>
                </Container>
            </div>
        </Col>

        </Row>
        <div>
        </div>
        </div>
        
        </div>
    )
}}

export default TeacherDashboard