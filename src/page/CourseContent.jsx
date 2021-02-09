import React, { useEffect, useState } from "react";
import { Player } from 'video-react';
import {Row, Col, Image, Button, Tab, Tabs, Card, Container } from 'react-bootstrap'
import CardPage from '../components/Card'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux';
import { getCourseLessons, getDataCourse, getCoursesLessons } from '../store/actions/users'
import { 
    Link
  } from 'react-router-dom';
const CourseContent = (props) => {
    const [active, isActive] = useState('');
    const userData = useSelector (state => state.user)
    const enrolledmentResult = useSelector (state => state.enrolledResult)
    const lessons = useSelector (state => state.getLessonByEnrolledSuccess)
    const detailCourse = useSelector (state => state.detailcourse)
    const detailLessons = useSelector (state => state.lessonscourse)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCourseLessons(props.match.params._id));
        dispatch(getDataCourse(props.match.params._id));
        dispatch(getCoursesLessons(props.match.params._id));  
        // console.log(lessons[Object.keys(lessons)[0]].lesson.video, 'ini coba')
    }, [active]);
    console.log(props.match.params._id, 'ini id dari page sebelumnya')
    console.log(props.match.params.title, 'mencari status')
    console.log(detailLessons.lesson[0], 'dapat')
    if(lessons.loaded === false || detailLessons.lesson === false){
        return (null)
    }
    // + `${lessons[Object.keys(lessons)[0]].lesson.video}`
    return (
        <div className='courseContentBody'> 
            <div className='topCourse'>
                <p className='topCourseNavigation'>{props.match.params.title}/</p>
                <h2 className='courseTitle'>JUDUL</h2>
            </div>
            <div className='contentContainer'>
                <Row>
                    <Col>
                        {/* <Player className='contentCoursePlayer' playsInline src={active.length > 0 ? lessons[active].lesson.video : `desc`}/> */}
                        <Player playsInline
                        className='contentCoursePlayer'
                        src={active.length > 0 ? 'https://lektur.kuyrek.com/lessonAssets/' + lessons[active].lesson.video : `` } />
                    </Col>
                    <Col>
                        <Card className='courseContentCard'>
                            <Card.Body >
                            <h5>Content</h5>
                                <div className="courseListContent" >
                                {Object.keys(lessons).map((getLessonByEnrolledSuccess, idx) => {
                                    return(
                                    <Row key={idx}>
                                        <div className="containerContent" >
                                            <button className="containerContentButton" type='submit' onClick={e => isActive (getLessonByEnrolledSuccess)} >{lessons[getLessonByEnrolledSuccess].lesson.title}</button>
                                        </div>
                                    </Row>
                                )})}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <div className='courseContentDescription'>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <div>    
                                        {active.length > 0 ? lessons[active].lesson.description : detailCourse.title }
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <div>
                                        Next
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div className="suggestionCard">
                <Container>  
                    <h3 className='relatedCourse'>Related Course</h3>
                </Container>
                <CardPage />
                <br/>
            </div>
            </div>
        </div>
    )
}

export default CourseContent