import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  { dataUserLoggedIn } from '../store/actions/users';
import { Container, Button } from 'react-bootstrap';
import Jumbotron from '../components/Jumbotron';
import JumbotronBot from '../components/JumbotronBot';
import LearnCard from '../components/Card';
import { dataCourse } from '../store/actions/users'

function Home() {
    const userData = useSelector (state => state.user)
    const dispatch = useDispatch();
    useEffect(() => {
    if (localStorage.getItem('token')){
      dispatch(dataUserLoggedIn());
      
    }
    }, []);

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
            <div>
                <Button variant="outline-warning" className="paginationButton">Programming</Button>{' '}
                <Button variant="outline-warning" className="paginationButton">Game</Button>{' '}
                <Button variant="outline-warning">Cooking</Button>{' '}
            </div>
            </Container>
            <LearnCard/>
            { userData.role ? 
            null :
            <JumbotronBot />
            }
        </div>
    )
}

export default Home;
