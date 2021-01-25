import React from 'react';
import { Container, Row, Button } from 'react-bootstrap'
import Jumbotron from '../components/Jumbotron'
import JumbotronBot from '../components/JumbotronBot'
import LearnCard from '../components/Card'


function Home() {
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