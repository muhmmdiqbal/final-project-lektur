import React, { useEffect } from 'react';
import { Container, Card, CardDeck } from 'react-bootstrap';
import { connect } from 'react-redux';
import { dataCourse } from '../../../store/actions';

import '../../../components/style/App.css';

const CourseList = ({
    course,
    dataCourse
}) => {

    useEffect(() => {
        dataCourse();
    }, [dataCourse]);

    return (
        <React.Fragment>
            <Container>
                <CardDeck className="cardList">
                    {course && course.map((v, index) => (
                        <div key={index}>
                            <Card className="h-100">
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

const mapStateToProps = state => ({
    course: state.course
});

const mapDispatchToProps = {
    dataCourse,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CourseList);