import React from 'react';
import { Container } from 'react-bootstrap'
import Jumbotron from '../components/jumbotron'
import JumbotronBot from '../components/jumbotronbot'
import LearnCard from '../components/card'


function Home() {
    return(
        <div>
            <Jumbotron />
            <Container>
            <h1>Ini Home</h1>
            <LearnCard />
            </Container>
            
            <JumbotronBot />

        </div>
    )
}

export default Home;