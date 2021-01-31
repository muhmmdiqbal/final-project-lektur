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
                    <Col className='judulHome'>
                        <h1>Bring your class at home</h1>
                        <Button variant="dark"> Enroll now </Button>
                    </Col>
                    <Col>
                    <Card><a href="Detail" className="Judul stretched-link">
                        <Card.Img className="jumbotronVid" variant="large" src={logo} /></a>
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