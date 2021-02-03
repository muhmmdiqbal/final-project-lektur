import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  { dataUserLoggedIn } from '../store/actions/users';
import { Container, Button, Row, Col, Tab, Tabs, Card, CardDeck } from 'react-bootstrap';
import Jumbotron from '../components/Jumbotron';
import JumbotronBot from '../components/JumbotronBot';
import LearnCard from '../components/Card';
import Category from '../page/Category'
import { dataCourse, dataCourseCategory } from '../store/actions/users'

const Home = (props) => {
    const userData = useSelector (state => state.user)
    const category = ['Cooking' , 'Game' , 'Programming'];
    const courses = useSelector (state => state.category);
    const dispatch = useDispatch();
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
            
            <LearnCard/>
            { userData.role ? 
            null :
            <JumbotronBot />
            }
        </div>
    )
}

export default Home;
