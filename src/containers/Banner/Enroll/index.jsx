import React, { useEffect } from 'react'
import { Jumbotron, Card, Button, Container, Row, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../components/style/App.css';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    GET_COURSES_SUCCESS
} from '../../../store/actions/types';

import Video from '../../../components/Video/VideoOption';

const Enroll = ({
    course: { loading, courses },
    getCourses
}) => {

    useEffect(() => {
        getCourses()
    }, [getCourses])

    const maxEnrolled = courses.reduce((acc, curr) => curr.enrolled > acc ? curr.enrolled : acc, 0);

    return (
        <Jumbotron fluid className="jumbotronTop">
            <Container>
                <div data-aos="fade">
                    <Row>
                        <Col>
                            <h1>Bring your class at home</h1>
                            <Button variant="dark">Enroll now</Button>
                        </Col>
                        <Col>
                            {loading ? <Spinner animation="grow" /> : courses && courses.reduce((r, o) => (o.enrolled === maxEnrolled) ? [...r, o] : r, []).map((v, index) => (
                                <div key={index}>
                                    <Card className="Judul">
                                        <Video />
                                        <Card.Body as={Link} to="/">
                                            <Row>
                                                <Col>
                                                    <span className="count">{v.enrolled} Enrolled</span>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={6}>
                                                    <Card.Title>{v.title}</Card.Title>
                                                </Col>
                                                <Col xs={6}>
                                                    <Card.Text>{v.material} Study material<br />
                                                        {v.lesson} Learning studios
                                        </Card.Text>
                                                </Col>
                                                <Col xs={6}>
                                                    <small className="text-muted">{v.user.name}</small>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </div>
            </Container>
        </Jumbotron>
    )
}

Enroll.propTypes = {
    loading: PropTypes.bool,
    courses: PropTypes.array,
    getCourses: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    course: state.course,
    loading: state.loading
})

const mapDispatchToProps = (dispatch) => ({
    getCourses: () => dispatch({ type: GET_COURSES_SUCCESS })
})

export default connect(mapStateToProps, mapDispatchToProps)(Enroll)