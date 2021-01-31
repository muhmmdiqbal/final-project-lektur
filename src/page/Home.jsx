import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  { dataUserLoggedIn, dataCourse } from '../store/actions/users';
import { Container, Button, Tab, Tabs, Card, CardDeck } from 'react-bootstrap';
import Jumbotron from '../components/Jumbotron';
import JumbotronBot from '../components/JumbotronBot';
import LearnCard from '../components/Card';
import { Link } from "react-router-dom";
// import { dataCourse } from '../store/actions/users'

function Home() {
    const userData = useSelector (state => state.user)
    const dispatch = useDispatch();
    useEffect(() => {
    if (localStorage.getItem('token')){
      dispatch(dataUserLoggedIn());
      
    }
    }, []);
    const courses = useSelector (state => state.course);
    useEffect(() => {
      dispatch(dataCourse());
    }, []);

    const [idCourse, setIdCourse] = useState('');
    const getIdCourse= (e) => {
    let idCourse = e.currentTarget.id;
    console.log(idCourse, 'idCourse onclick');
    setIdCourse(idCourse);
  }
    // const course = useSelector (state => state.course)
    // useEffect(() => {
    //   dispatch(dataCourse());
    // }, []);
    // console.log(course, 'item course')

    return(
        <div>
            <Jumbotron />
            <Container><br />
            <h1>What to learn next</h1>
            <div className="teacher">
            {/* <Row className="teacher"> */}
                {/* <Button variant="outline-warning">Programming</Button>{' '}
                <Button variant="outline-warning">Game</Button>{' '}
                <Button variant="outline-warning">Cooking</Button>{' '} */}

            {/* </Row> */}<br/>
            <Tabs className="text-dark" defaultActiveKey="all" id="uncontrolled-tab-example">
            <Tab eventKey="all" title="All">
            <LearnCard />

            </Tab>
            <Tab eventKey="programming" title="Programming">
            {courses.map((course) => (
                // <Link to={`/detail/${idCourse}`}>
                     <Container>
                            <CardDeck className="cardList">
                            {courses.map((course, idx) => (
                            <div key={idx}>
                                <Card className="Card" >
                                    <Card.Img className="cardimg" variant="top" fluid='true' src={`${course.image}`} />
                                    <a href={`/Detail/${idCourse}`} className="Judul stretched-link" onClick={getIdCourse}>
                                    </a>
                                    <Card.Body>
                                        <Card.Title>{course.title}</Card.Title>
                                            <p>Description : {course.description}</p>
                                            <h5></h5>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Category : {course.category}</small>
                                    </Card.Footer>
                                </Card>
                            </div>
                            ))}
                            <br />
                            </CardDeck><br /> 
                            <div></div>
                        </Container> 
            // </Link>
            ))}
            </Tab>
            <Tab eventKey="game" title="Game">
            <LearnCard/>

            </Tab>
            <Tab eventKey="cooking" title="Cooking">
            <LearnCard/>

            </Tab>
            </Tabs>
            </div>
            </Container>
            
            {/* <LearnCard/> */}
            { userData.role ? 
            null :
            <JumbotronBot />
            }
        </div>
    )
}

export default Home;