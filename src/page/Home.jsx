import React from 'react';
import { Container } from 'react-bootstrap'
import Jumbotron from '../components/Jumbotron'
import JumbotronBot from '../components/JumbotronBot'
import LearnCard from '../components/Card'


function Home() {
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