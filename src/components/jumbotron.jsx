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
                            <Card.Title>Public Speaking Like a Pro
                            <small className="text-muted"> By John Doe</small>
                            </Card.Title>
                            <Card.Text>
                                Vestibulum fusce parturient urna a molestie orci. Lectus id quisque amet et vel elementum morbi cursus. Amet sagittis semper mauris diam orci facilisis...
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Business</small>
                        </Card.Footer>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    </div>
    )
}

export default enroll