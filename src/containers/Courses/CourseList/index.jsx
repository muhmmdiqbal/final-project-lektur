import React, { useEffect } from 'react';
import { Container, Card, CardDeck, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
    GET_COURSES_SUCCESS
  } from '../../../store/actions/types';

import '../../../components/style/App.css';

const CourseList = ({
	course: { loading, courses },
	getCourses
}) => {

	useEffect(() => {
		getCourses()
	}, [getCourses])

    return (
        <React.Fragment>
            <Container data-aos="fade">
                <CardDeck className="cardList">
                    {loading ? <Spinner animation="grow" /> : courses && courses.map((v, index) => (
                        <div key={index}>
                            <Card className="h-100 link" as={Link} to="/">
                                <Card.Img className="cardimg" variant="top" fluid='true' src={v.image} />
                                <Card.Body>
                                    <Card.Title>{v.title} <br />
                                        <Card.Text className="writer">{v.user.name}</Card.Text>
                                        <span className="note">{v.lesson} Videos &nbsp;&nbsp;&nbsp;&nbsp; {v.material} Learning Material</span>
                                    </Card.Title>
                                    <Card.Text>{v.description}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Card.Text>{v.category}</Card.Text>
                                </Card.Footer>
                            </Card>
                        </div>
                    ))}
                </CardDeck>
            </Container>
        </React.Fragment>
    )
};

CourseList.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(CourseList)