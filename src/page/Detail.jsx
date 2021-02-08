import React, { useEffect, useState, Component } from 'react';
import { useParams } from 'react-router-dom';
import { Player } from 'video-react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataCourse, getCoursesLessons, getEnrollStatus, checkEnrollStatus } from '../store/actions/users';
import { Jumbotron, Card, Button, Container, Row, Col, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../App.css'
import CardPage from '../components/Card'


function Detail( props ) {
    const detailCourse = useSelector (state => state.detailcourse)
    const detailLessons = useSelector (state => state.lessonscourse)
    const enrolledFailed = useSelector (state => state.enrollError)
    const enrollChecked = useSelector (state => state.enrollStatus)
    const enrolled = enrollChecked.enroll.find(course => course.course.id === props.match.params.id)
    const courses = useSelector (state => state.course);
    const dispatch = useDispatch();

    const [ show, setShow ] = useState(false);
    const handleClose = () => setShow(false);

    const handleSubmit = async (e) => {
        e.preventDefault();  
        dispatch(getEnrollStatus( props.match.params.id ));
        setShow(true);
    };

    const handleOk = async (e) => {
        e.preventDefault()
        window.location.href =`/Detail/${props.match.params.id}`
    }
    console.log(enrollChecked, 'ini cek aja')
    console.log(detailCourse, 'detailcourse')
    console.log(courses, 'ini list course')
    useEffect(() => {
        async function checkDataCourse(){
            dispatch(getDataCourse(props.match.params.id));
            dispatch(getCoursesLessons(props.match.params.id));
        }
            async function forStudent(){
                if(localStorage.getItem('role') === 'student'){
                    await dispatch(checkEnrollStatus());
                }
            }
        checkDataCourse()
        forStudent()
    }, []);
    console.log(enrolled, 'ini cuma mau nyoba doang')
    if (detailCourse.loaded === false || detailLessons.loaded === false) {
        return (null)
    }
    return(
        <div>
            <div className="detailBody">
            <Modal className='enrollModal' show={show} onHide={handleClose}>
                    <Modal.Body>
                        <div className='closeTextModal'>
                            <button onClick={handleClose, handleOk}>close</button>
                        </div>
                        <Row>
                            <Col className='ml-auto mr-5'>
                                <img className='modalImg' src={detailCourse.image} />
                            </Col>
                            <Col>
                                <h5 className='text-success'>Successfully enrolled!</h5>
                                <p className='detailModalTiltle'>{detailCourse.title}</p>
                                <p className='detailModalAuthors text-secondary'>{detailCourse.user.name}</p>
                            </Col>
                        </Row>
                        <div className='footerModal'>Please wait coresponding teacher approve you!</div>
                    </Modal.Body>
                </Modal>
                <Jumbotron fluid className="jumbotronDetail" style={{ backgroundImage: `url(${detailCourse.image})`, backgroundSize: 'cover', backgroundWidth: '1265', backgroundHeight: '100%' }}>
                <Container className='containerJumbotron'>
                    <p className="text-white">{detailCourse.category}</p>
                    <h1 className="text-white">{detailCourse.title}</h1>
                    <h4 className="text-white">Create by: {detailCourse.user.name}</h4>
                    <br/><br/>
                    {enrolled ? enrolled.status === 'pending' ?
                    <Button className="text-white enrollSend" > ENROLL REQUES SEND </Button> :
                    <Button variant="warning" className="text-white" onClick={handleSubmit}> ENROLL NOW </Button>:
                    <Button variant="warning" className="text-white" onClick={handleSubmit}> ENROLL NOW </Button>
                    }
                </Container>
                </Jumbotron>
                <Container>
                <Card className="detailCard">
                    <Card.Body>
                        <Row className='detailCardImage' >
                            <Player className='videoCard' playsInline src={detailLessons.lesson[0].video} />
                        </Row>
                        <br/>
                        <Row className="insightCourse">
                            <Col>
                                <h1>{detailCourse.lesson}</h1>
                                <h5>Lesson</h5>
                            </Col>
                            <Col>
                                <h1>{detailCourse.material}</h1>
                                <h5>Material</h5>
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
                                    <button className="containerContentButton" >{lessonscourse.title}</button>
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