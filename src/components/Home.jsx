import React from 'react';
import { Container } from 'react-bootstrap'
import Jumbotron from './jumbotron'
import LearnCard from './card'


function Home() {
    return(
        <div>
            <Jumbotron />
            <Container>
            <h1>Ini Home</h1>
            <LearnCard />
            </Container>
            
            <Jumbotron />

        </div>
    )
}

export default Home;