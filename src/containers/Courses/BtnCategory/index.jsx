import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import '../../../components/style/App.css';

const Category = () => {
    return (
        <Container className="category">
            <h1>What to learn next</h1>
            <Row>
                <Col>
                    <Button variant="outline-warning">Programming</Button>
                    <Button variant="outline-warning">Game</Button>
                    <Button variant="outline-warning">Cooking</Button>
                    <Button variant="outline-warning">Cooking</Button>
                    <Button variant="outline-warning">Cooking</Button>
                    <Button variant="outline-warning">Cooking</Button>
                    <Button variant="outline-warning">Cooking</Button>
                    <Button variant="outline-warning">Cooking</Button>
                    <Button variant="outline-warning">Cooking</Button>
                    <Button variant="outline-warning">Cooking</Button>
                    <Button variant="outline-warning">Cooking</Button>
                    <Button variant="outline-warning">Cooking</Button>
                    <Button variant="outline-warning">Cooking</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Category;