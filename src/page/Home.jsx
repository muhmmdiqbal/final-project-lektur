import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  { dataUserLoggedIn } from '../store/actions/users';
import { Container } from 'react-bootstrap'
import Jumbotron from '../components/Jumbotron'
import JumbotronBot from '../components/JumbotronBot'
import LearnCard from '../components/Card'


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
            <Container>
            <LearnCard />
            </Container>
            <JumbotronBot />
        </div>
    )
}

export default Home;