import React, { useEffect, Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataCourse } from '../store/actions/users'
import { Card, Container, CardDeck } from 'react-bootstrap'

const LearnCard = () => {
    const courses = useSelector (state => state.course);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(dataCourse());
    }, []);
    console.log(courses, 'item course')
                return (
                    <div>
                        <Container>
                            <CardDeck className="cardList">
                            {courses.map((course, idx) => (
                            <div key={idx}>
                                <Card className="Card" >
                                    <Card.Img className="cardimg" variant="top" fluid='true' src={course.image} />
                                    <a href="Detail" className="Judul stretched-link">
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
