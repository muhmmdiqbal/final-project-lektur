import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { dataAddCourse } from '../store/actions/users';
import NavCourse from './NavCourse'
import { Form, Button, Container, Row, Col} from 'react-bootstrap'
import '../App.css'


const Course = (props) => {
    return (
        <div>
        <NavCourse />
        <Container>
        <div className="containerLesson">
            <Container>
                {/* <Form onSubmit={handleSubmit}><br/>
                    <Form.Group>
                        <Form.Control type="text" value={title} name="title" onChange={handleChange} placeholder="Title*"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" value={overview} name="overview" onChange={handleChange} placeholder="Overview*" />
                    </Form.Group>
                    <Form.Group>
                        <div className="">
                        <Form.File type="file" value={image} name="image" onChange={handleChange} accept="image/png, image/jpeg" label="Add Header Image:"></Form.File>
                        <Form.Text className="text-muted">
                            <i>Max. size 5 MB. Supported format .png/jpg/jpeg</i>
                        </Form.Text>
                        </div>
                    </Form.Group><br/><br/>
                        <div className="loginButton">
                            <Button className="accButton" type="submit" >Save</Button>
                        </div><br/>
                </Form> */}
                    </Container>
                        </div><hr />
                            <h4>Content*</h4>
                            <p><a href="NewLesson">Add New Lesson</a></p>
                            <div className="loginButton">
                                <Button className="accButton" type="submit" class="btn btn-link">Publish Course</Button>
                            <p><a href="#Course">Delete Course</a></p>
                        </div>
                    </Container>
        </div>
    )
}

export default Course