import React, { useEffect, useState, Component } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDataCourse, getCoursesLessons } from '../store/actions/users';
import { Jumbotron, Card, Button, Container, Row, Col } from 'react-bootstrap'
import '../App.css'
import CardPage from '../components/Card'


function Detail( props ) {
    const detailCourse = useSelector (state => state.detailcourse)
    const detailLessons = useSelector (state => state.lessonscourse)
    const userData = useSelector (state => state.user)
    const dispatch = useDispatch();
    console.log(userData, 'udah login')
    useEffect(() => {
        dispatch(getDataCourse( props.match.params.id ));
        dispatch(getCoursesLessons( props.match.params.id ));
      }, []);
    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    // }
    if (detailCourse.loaded === false || detailLessons.loaded === false) {
        return (null)
    }
    return(
        <div>
            <div className="detailBody">
                <Jumbotron fluid className="jumbotronDetail" style={{ backgroundImage: `url(${detailCourse.image})`, backgroundSize: 'cover', backgroundWidth: '1265', backgroundHeight: '100%' }}>
                    {/* style={{ backgroundImage: `url(${detailCourse.image})`, backgroundSize: 'cover' }} */}
                <Container className='containerJumbotron'>
                    <p className="text-white">{detailCourse.category}</p>
                    <h1 className="text-white">{detailCourse.title}</h1>
                    <h4 className="text-white">Create by: {detailCourse.user.name}</h4>
                    <br/><br/>
                    <Button variant="warning" className="text-white"> ENROLL NOW </Button>
                </Container>
                </Jumbotron>
                <Container>

                <Card className="detailCard">
                    <Card.Body>
                        <Row className='detailCardImage' style={{ backgroundImage: `url(${detailCourse.image})`, backgroundSize: 'cover' }}></Row>
                        <br/>
                        <Row className="insightCourse">
                            <Col>
                                <h1>{detailCourse.lesson}</h1>
                                <p2>Lesson</p2>
                            </Col>
                            <Col>
                                <h1>{detailCourse.material}</h1>
                                <p2>Material</p2>
                            </Col>
                        </Row>
                        <br/>
                        <Row className="contentInsight">
                            <h5>Content</h5>
                        </Row>
                        <Row>
                        <div className="courseList" >
                            {detailLessons.lesson.map((lessonscourse, idx) => (
                            <Row key={idx}>
                                <div className="containerContent" >
                                    <p><a href="#/Detail">{lessonscourse.title}</a></p>
                                </div>
                            </Row>
                            ))}
                        </div>
                        </Row>
                    </Card.Body>
                </Card>
                </Container>

                <div className="containerDescription">
                <Container>
                    <h2>Description</h2>
                        <div className="containerText">
                            <p>{detailCourse.description}</p>
                        </div>
                </Container> 
                </div>
                <div className="containerSuggestion">
                    <br/>
                    <div className="suggestionCard">
                        <Container>  
                            <h3 className='relatedCourse'>Related Course</h3>
                        </Container>
                        <CardPage />
                        <br/>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Detail;