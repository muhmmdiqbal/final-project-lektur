import React from 'react'
import NavCourse from './NavCourse'
import { Form, Button, Container} from 'react-bootstrap'
import '../App.css'


const course = () => {
    return (
        <div>
        <NavCourse />
        <Container>
        <h1>ini Course</h1>

        <div className="containerLesson">
            <Container>
                    <Form><br/>
                        <Form.Group>
                        <div className="containerForm">
                            <input className="formInput" type="text" id="fname" name="fname" placeholder="Title*"></input>
                        </div><br/></Form.Group>
                        <Form.Group>
                        <div className="containerForm">
                            <input className="formInput" type="text" id="fname" name="fname" placeholder="Overview*"></input>
                        </div>
                        </Form.Group>
                        <Form.Group>
                        <div className="">
                        <Button variant="outline-warning">Add Header Image</Button>
                        <Form.Text className="text-muted">
                        <i>Max. size 5 MB. Supported format .png/jpg/jpeg</i>
                        </Form.Text>
                        </div></Form.Group><br/><br/>
                        <div className="loginButton">
                            <Button className="accButton" type="submit" class="btn btn-link" href="#NewLesson">Save</Button>
                        </div><br/>
                        
                    </Form>
                    </Container>

                        </div><hr />
                        <h4>Content*</h4>
                        <p><a href="#NewLesson">Add New Lesson</a></p>
                        <div className="loginButton">
                            <Button className="accButton" type="submit" class="btn btn-link">Publish Course</Button>
                        <p><a href="#Course">Delete Course</a></p>
                        </div>

        </Container>
        </div>
    )
}

export default course