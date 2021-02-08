import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataCourse } from '../store/actions/users'
import { Card, Container, CardDeck } from 'react-bootstrap'

const LearnCard = () => {
    const courses = useSelector (state => state.course);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(dataCourse());
    }, []);
    const handleSubmit = id =>  e  => {
        e.preventDefault();
        window.location.href =`/Detail/${id}`
    };
    console.log(courses, 'ini data course')
        return (
            <div>
                <Container>
                    <CardDeck className="cardList" >
                    {courses.map((course, idx) => (
                    <div className='CardContent' key={idx}>
                        <Card className="Card" type='submit' onClick={handleSubmit (course.id)}>
                                <Card.Img className="cardimg" variant="top" fluid='true' src={course.image} />
                                <Card.Body>
                                    <Card.Title>{course.title}</Card.Title>
                                        <p>Description: {course.description}</p>
                                </Card.Body>
                                <Card.Footer>
                                        <small className="text-muted">Category: {course.category}</small>
                                 </Card.Footer>
                        </Card>
                    </div>
                    ))}
                    <br />
                    </CardDeck><br/> 
                </Container> 
            </div>
        )
}
export default LearnCard