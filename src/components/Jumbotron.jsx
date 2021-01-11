import React from 'react' 
import { Jumbotron, Card, Button, Container, Row, Col } from 'react-bootstrap'
import '../App.css'
import logo from './assets/logo.png'

const enroll = () => {
    return (
    <div>
        <Jumbotron fluid>
            <Container>
                <Row>
                    <Col>
                    <h1>Bring your class at home</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                    <Button variant="dark">Enroll now</Button>
                    </p>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Img variant="small" src={logo} />
                        <Card.Body>
                            <Row>
                                <Col>
                                
                            <Card.Title>Sales and marketing master class<br/>
                            <small className="text-muted">Susan sarah</small>

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