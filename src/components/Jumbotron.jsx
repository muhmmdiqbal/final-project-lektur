import React from 'react' 
import { Jumbotron, Card, Button, Container, Row, Col } from 'react-bootstrap'
import '../App.css'
import logo from './assets/jumbotronBot.jpg'

const enroll = () => {
    return (
    <div>
        <Jumbotron fluid className="jumbotronTop">
            <Container>
                <Row>
                    <Col>
                    <h1>Bring your class at home</h1>
                    {/* <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p> */}
                    <p>
                    <Button variant="dark">Enroll now</Button>
                    </p>
                    </Col>
                    <Col>
                    <Card><a href="Detail" className="Judul stretched-link">
                        <Card.Img className="jumbotronVid" variant="large" src="https://lektur.kuyrek.com/imgCourses/f3bd3ed6c5060d3c2da5bc97b42f9e77.jpg" /></a>
                        <Card.Body>
                            <Row>
                                <Col>
                                
                            <Card.Title>MMR explanation for noob<br/>
                            <small className="text-muted">John Doe</small>

                            </Card.Title>
                            </Col>
                            <Col>
                                
                            <Card.Text>4 Study material
                            </Card.Text>
                            <Card.Text>14 Learning studios
                            </Card.Text>
                            </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    </div>
    )
}

export default enroll