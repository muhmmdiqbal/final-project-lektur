import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  { dataUserLoggedIn, checkEnrollStatus } from '../store/actions/users';
import { Container, Button } from 'react-bootstrap';
import Jumbotron from '../components/Jumbotron';
import JumbotronBot from '../components/JumbotronBot';
import LearnCard from '../components/Card';
import Category from '../page/Category'
import { dataCourse, dataCourseCategory } from '../store/actions/users'

const Home = (props) => {
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
    const category = ['Cooking' , 'Game' , 'Programming'];
    const courses = useSelector (state => state.category);
    useEffect(() => {
    if (localStorage.getItem('token')){
      dispatch(dataUserLoggedIn());
    }
    }, []);
    useEffect(() => {
        dispatch(dataCourseCategory(props.match.params.category));
    }, []);

    const handleCategory = category =>  e  => {
        e.preventDefault();
        window.location.href =`/Category/${category}`
      };

    return(
        <div>
            <Jumbotron />
            <Container><br />
            <h1>What to learn next</h1><br/>
            <div>
                <Button variant="outline-warning" className="paginationButton" onClick={handleCategory (category[0])}>Cooking</Button>{' '}
                <Button variant="outline-warning" className="paginationButton" onClick={handleCategory (category[1])}>Game</Button>{' '}
                <Button variant="outline-warning" className="paginationButton" onClick={handleCategory (category[2])}>Programming</Button>{' '}
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
