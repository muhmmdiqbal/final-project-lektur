import React from 'react'
import { Jumbotron, Card, Button, Container, Row, Col } from 'react-bootstrap'
import '../../../components/style/App.css';

import Video from '../../../components/Video/VideoOption';

const Enroll = () => {
    return (
        <Jumbotron fluid className="jumbotronTop">
            <Container>
                <Row>
                    <Col>
                        <h1>Bring your class at home</h1>
                        <Button variant="dark">Enroll now</Button>
                    </Col>
                    <Col>
                        <Card className="Judul">
                            <Video />
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <span className="count">165 count</span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={6}>
                                        <Card.Title>Sales and marketing master class</Card.Title>
                                    </Col>
                                    <Col xs={6}>
                                        <Card.Text>4 Study material<br />
                                        14 Learning studios
                                        </Card.Text>
                                    </Col>
                                    <Col xs={6}>
                                        <small className="text-muted">Susan sarah</small>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Enroll