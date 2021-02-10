import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getSavedCourse } from '../store/actions/users';
import NavCourse from './NavCourse'
import { Form, Button, Container, Row, Col} from 'react-bootstrap'
import '../App.css'


const Course = (props) => {
    const dispatch = useDispatch();
    const savedCourse = useSelector (state => state.getSaveCoursesSuccess)
    const [course, setCourse] = useState ({
        title: '',
        description: '',
        category:''
    });
    const [images, setImage] = useState({
        image: null
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(e.target, 'ini target')
        setCourse({
            ...course,
            [name]: value,
        });
    };

    const imageHandler = (e) => {
        setImage({
            image: e.target.files[0]
        });
    };
    
    useEffect(() =>{
        dispatch(getSavedCourse());
    },[]);

    const handleSubmit = e => {
        e.preventDefault()
        const formData = new FormData();
            formData.append('title', course.title);
            formData.append('category', course.category);
            formData.append('description', course.description);
            formData.append('image', images.image);
        // dispatch(dataAddCourse(formData))
        axios.post('https://lektur.kuyrek.com/courses/create', formData, 
        { 'headers': 
                { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        }).then(res => {
            // res.data.data
            if (res.data.status === 'Success create course!'){
                localStorage.setItem('createCourseId', res.data.data._id)
                localStorage.setItem('createCourseStatus', res.data.status)
            }
        }).catch( err => err.message)
    }
    
    console.log(course, 'tes gambar')
    console.log(savedCourse, 'gambarrrr')
    return (
        <div>
        <NavCourse />
        <Container>
        <div className="containerLesson">
            <Container>
                {localStorage.getItem('createCourseId') ? 
                <>
                <br/>
                <h2>Judul</h2>
                <p>Keterangan</p>
                <br/>
                </>
                :
                <Form onSubmit={handleSubmit}>
                    <br/>
                    <Form.Group>
                        <Form.Control name='title' value={course.title} onChange={handleChange} type="text" placeholder="Title*"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control name='description' value={course.description} onChange={handleChange} type="text" placeholder="Overview*" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Select category</Form.Label>
                        <Form.Control as="select" name='category' onChange={handleChange}>
                            <option >Select category</option>
                            <option value={course.categoty} >Game</option>
                            <option value={course.categoty} >Cooking</option>
                            <option value={course.categoty} >Programming</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <div className="">
                        <Form.File type="file" accept="image/png, image/jpeg" name='image' onChange={imageHandler} label="Add Header Image:"></Form.File>
                        <Form.Text className="text-muted">
                            <i>Max. size 5 MB. Supported format .png/jpg/jpeg</i>
                        </Form.Text>
                        </div>
                    </Form.Group>
                        <br/>
                        <br/>
                        <div className="loginButton">
                            <Button className="accButton" type='submit'>Save</Button>
                        </div>
                        <br/>
                </Form> 
                }
                    </Container>
                        </div><hr />
                            <h4>Content*</h4>
                            <button className='addNewLesson'>Add New Lesson</button>
                            <div className="loginButton">
                                <Button className="accButton" type="submit" class="btn btn-link">Publish Course</Button>
                            <p><a href="#Course">Delete Course</a></p>
                        </div>
                    </Container>
        </div>
    )
}

export default Course