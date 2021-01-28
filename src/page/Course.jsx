import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { dataAddCourse } from '../store/actions/users';
import NavCourse from './NavCourse'
import { Form, Button, Container, Row, Col} from 'react-bootstrap'
import '../App.css'


const Course = () => {

    const [courseData, setCourseData] = useState ({
        title: "",
        overview: "",
        image: "",
    });

    const { title, overview, image } = courseData;
    
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(dataAddCourse({title, overview, image}));
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourseData((prevUserData) => {
          return {
            ...prevUserData,
            [name]: value,
          };
        });
      };
      console.log(courseData, 'ini add course')

    return (
        <div>
        <NavCourse />
        <Container>
        <div className="containerLesson">
            <Container>
                    <Form onSubmit={handleSubmit}><br/>
                        <Form.Group>
                        {/* <div className="containerForm"> */}
                            {/* <input className="formInput" type="text" value={title} name="title" onChange={handleChange} placeholder="Title*"></input> */}
                        {/* </div> */}
                        <Form.Control type="text" value={title} name="title" onChange={handleChange} placeholder="Title*"/>
                        </Form.Group>
                        <Form.Group>
                        {/* <div className="containerForm"> */}
                        <Form.Control type="text" value={overview} name="overview" onChange={handleChange} placeholder="Overview*" />
                            {/* <input className=" lg-4" type="text" value={overview} name="overview" onChange={handleChange} placeholder="Overview*"></input> */}
                        {/* </div> */}
                        </Form.Group>
                        <Form.Group>
                        <div className="">
                        <Form.File type="file" value={image} name="image" onChange={handleChange} accept="image/png, image/jpeg" label="Add Header Image:"></Form.File>
                        <Form.Text className="text-muted">
                        <i>Max. size 5 MB. Supported format .png/jpg/jpeg</i>
                        </Form.Text>
                        </div></Form.Group><br/><br/>
                        <div className="loginButton">
                            <Button className="accButton" type="submit" >Save</Button>
                        </div><br/>
                        
                    </Form>
                    </Container>

                        </div><hr />
                        <h4>Content*</h4>
                        <p><a href="NewLesson">Add New Lesson</a></p>
                        <div className="loginButton">
                            <Button className="accButton" type="submit" class="btn btn-link">Publish Course</Button>
                        <p><a href="#Course">Delete Course</a></p>
                        </div>
                        {/* <h4>Content*</h4><br/>
        
        <div className="containerLesson">
        <Container>

            <div>

                <br />
                    <h5>Lesson #1</h5>
                    <Row>
                        <Col>
                        <Form><br />
                        <div className="containerForm">
                        <input className="formInput" type="text" id="fname" name="fname" placeholder="Title"></input>
                            </div><br/>
                            <div className="containerForm">
                                <input className="formInput" type="text" id="fname" name="fname" placeholder="Description"></input>
                            </div>
                        </Form>
                        </Col>
                        <Col>
                        <Button variant="dark">Upload Video</Button>
                        <Form.Text className="text-muted">
                        <i>Required. Max. size 200 MB. Supported format .mp4</i>
                        </Form.Text><br/>
                        <Button variant="outline-dark">Add Lesson Material</Button>
                        <Form.Text className="text-muted">
                        <i>Max. size 20 MB. Supported format .pdf</i>
                        </Form.Text><br/><br/><br/><br/>
                        <div className="loginButton">
                            <Button className="accButton" type="submit" class="btn btn-link" href="#Course">Save</Button>
                        </div><br/>
                        </Col>
                    </Row>
                    
            </div>
            
            </Container>

        </div> */}

        </Container>
        </div>
    )
}

export default Course