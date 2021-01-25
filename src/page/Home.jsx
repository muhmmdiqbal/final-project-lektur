import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  { dataUserLoggedIn } from '../store/actions/users';
import { Container, Button } from 'react-bootstrap';
import Jumbotron from '../components/Jumbotron';
import JumbotronBot from '../components/JumbotronBot';
import LearnCard from '../components/Card';


function Home() {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     if (localStorage.getItem('token')){
//       dispatch(dataUserLoggedIn());
      
//     }
//     }, []);
    return(
        <div>
            <Jumbotron />
            <Container><br />
            <h1>What to learn next</h1>
            <div className="teacher">
            {/* <Row className="teacher"> */}
                <Button variant="outline-warning">Programming</Button>{' '}
                <Button variant="outline-warning">Game</Button>{' '}
                <Button variant="outline-warning">Cooking</Button>{' '}

            {/* </Row> */}
            </div>
            </Container>
            <LearnCard />

            <JumbotronBot />
        </div>
    )
}

export default Home;