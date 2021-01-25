import React from 'react';
import { Jumbotron, Card, Button, Container, Row, Col } from 'react-bootstrap'
import '../App.css'
import logo from '../components/assets/logo.png'
import CardPage from '../components/Card'


function Detail() {
    return(
        <div>
            <div className="detailBody">
                <Jumbotron fluid className="jumbotronDetail">
                <Container>
                    <p>Art & Humanity</p>
                    <h1>Create Cinematic Music Video</h1>
                    <h4>By Justin Junaedi</h4>
                    <p><Button variant="warning">Enroll now</Button></p>
                </Container>

                </Jumbotron>
                <Container>

                <Card className="detailCard">

                    <Card.Body>
                        <Row className="insightCourse">
                            <Col>
                                <h1>14</h1>
                                <p2>Learning videos</p2>
                            </Col>
                            <Col>
                                <h1>12</h1>
                                <p2>Learning Music</p2>
                            </Col>
                        </Row>
                        <br/>
                        <br/>
                        <Row className="contentInsight">
                            <h5>Content</h5>
                        </Row>
                        <Row>
                        <div className="courseList">
                            <Row>
                                <div className="containerContent">
                                    <p><a href="#/Detail">Lesson #1:</a></p>
                                </div>
                            </Row>
                            <Row>
                                <div className="containerContent"> 
                                    <p><a href="#/Detail">Lesson #2:</a></p>
                                </div>
                            </Row>
                            <Row>
                                <div className="containerContent">
                                    <p><a href="#/Detail">Lesson #1:</a></p>
                                </div>
                            </Row>
                            <Row>
                                <div className="containerContent">
                                    <p><a href="#/Detail">Lesson #1:</a></p>
                                </div>
                            </Row>
                        </div>
                        </Row>
                    </Card.Body>

                </Card>
                </Container>

                <div className="containerDescription">
                <Container>

                    <h2>Description</h2>
                        <div className="containerText">
                            <p>Nascetur consequat quam tellus sed convallis amet, nunc. Venenatis, eget faucibus iaculis facilisi pellentesque eleifend mattis vel. Nunc euismod morbi lectus aliquam pretium, pharetra, tellus orci. Lobortis at nulla dictum risus amet. Nunc dolor sit vitae arcu facilisis eu. Tortor, turpis arcu in est. Ullamcorper fringilla ut tempus nulla dolor lorem proin porta neque. Neque eu lorem ultrices id. Et mattis lacus fermentum id nec, aenean enim, curabitur. Enim, donec quis odio ut enim scelerisque id erat laoreet. Vitae sodales rhoncus, et ut ut. Amet, porttitor adipiscing nullam mauris. Lobortis interdum imperdiet mauris pharetra risus proin etiam est.</p>
                        </div>
                </Container>
                        
                </div>
                <div className="containerSuggestion">
                    
                    <h3>Related Course</h3><br/><br/>
                        <div className="suggestionCard">
                            <CardPage />
                            <br/>
                        </div>
                        
                </div>
            </div>
        </div>
    )
}

export default Detail;