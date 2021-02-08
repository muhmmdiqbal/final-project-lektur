import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  { dataUserLoggedIn, checkEnrollStatus } from '../store/actions/users';
import { Container, Button } from 'react-bootstrap';
import Jumbotron from '../components/Jumbotron';
import JumbotronBot from '../components/JumbotronBot';
import LearnCard from '../components/Card';
import { dataCourse } from '../store/actions/users'

function Home() {
    const userData = useSelector (state => state.user)
    const enrollCheckers = useSelector (state => state.enrollStatus)
    console.log(enrollCheckers, 'ini enrollment')
    const dispatch = useDispatch();
    useEffect(() => {
        async function getDataUser(){
            await dispatch(dataUserLoggedIn());
        }
            async function forStudent(){
                if(localStorage.getItem('role') === 'student'){
                    await dispatch(checkEnrollStatus());
                }
            }
        getDataUser()
        forStudent()
    }, []);
   console.log(enrollCheckers, 'ini cek enroll')
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
            <div className='homeLearnCard'>
                <LearnCard />
            { userData.role ? 
            <div className='homeBody'>
            </div> :
            <JumbotronBot />
            }
            </div>
        </div>
    )
}

export default Home;
