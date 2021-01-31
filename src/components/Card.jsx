import React, { useEffect, Component, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataCourse } from '../store/actions/users'
import { Card, Container, CardDeck } from 'react-bootstrap'
import axios from 'axios';

const LearnCard = () => {
    // const courses = useSelector (state => state.course);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //   dispatch(dataCourse());
    // }, []);

    const [course, setCourse] = useState(null);
    let {courseId} = useParams();
    useEffect(() => {
        const urlCourse = `https://lektur.kuyrek.com/courses/${courseId}`;
        axios.get(urlCourse).then(res => {
        setCourse(res.data);
        })
    }, []);
    let courseDetail;
    course === null ? courseDetail = null : courseDetail = course.course[0];
    console.log(course, 'item course')
                return (
                    <div>
                        <Container>
                            <CardDeck className="cardList">
                            {courses.map((course, idx) => (
                            <div key={idx}>
                                <Card className="Card" >
                                    <Card.Img className="cardimg" variant="top" fluid='true' src={course.image} />
                                    <a href="Detail" className="Judul stretched-link" onClick={getCourseId}>
                                    </a>
                                    <Card.Body>
                                        <Card.Title>{course.title}</Card.Title>
                                            <p>Description : {course.description}</p>
                                            <h5></h5>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Category : {course.category}</small>
                                    </Card.Footer>
                                </Card>
                            </div>
                            ))}
                            <br />
                            </CardDeck><br /> 
                            <div></div>
                        </Container> 
                    </div>
                )
}
export default LearnCard
