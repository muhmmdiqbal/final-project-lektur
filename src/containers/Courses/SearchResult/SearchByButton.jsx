import React, { useEffect } from 'react';
import '../../../components/style/App.css';
import { Container, CardDeck, Spinner, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import Header from '../../../components/Navbar/Header';
import Enroll from '../../Banner/Enroll';
import Regist from '../../Banner/Regist';
import Footer from '../../../components/Footer';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    GET_COURSES_BY_CATEGORY_SUCCESS
} from '../../../store/actions/types';

const SearchByButton = ({
    courseByCategory: { loading, loaded, coursesByCategory },
    getCoursesByCategory,
    props
}) => {

    useEffect(() => {
        getCoursesByCategory(props.match.params.category)
    }, [getCoursesByCategory])

    if (coursesByCategory.loaded === false) {
        return (null)
    }

    return (
        <React.Fragment>
            <Header />
            <Enroll />
            <Container data-aos="fade">
                <CardDeck className="cardList">
                    {loading ? <Spinner animation="grow" /> : coursesByCategory && coursesByCategory.map((v, index) => (
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
            <Regist />
            <Footer />
        </React.Fragment>
    )
}

SearchByButton.propTypes = {
    loading: PropTypes.bool,
    courseByCategory: PropTypes.array,
    getCoursesByCategory: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    courseByCategory: state.courseByCategory,
    loading: state.loading,
    category: state.category,
    loaded: state.loaded
})

const mapDispatchToProps = (dispatch) => ({
    getCoursesByCategory: () => dispatch({ type: GET_COURSES_BY_CATEGORY_SUCCESS })
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchByButton)