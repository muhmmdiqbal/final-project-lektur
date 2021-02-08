import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataCourseCategory } from '../store/actions/users'
import { Card, Container, CardDeck } from 'react-bootstrap'

const Category = (props) => {
    const courses = useSelector (state => state.category);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(dataCourseCategory( props.match.params.category ));
    }, []);

    const handleSubmit = id =>  e  => {
        e.preventDefault();
        window.location.href =`/Detail/${id}`
    };
    console.log(props.match.params.category, 'item course category')
        return (
            <div>
                <Container>
                    <CardDeck className="cardList" >
                    {courses.map((category, idx) => (
                    <div className='CardContent' key={idx}>
                        <Card className="Card" type='submit' onClick={handleSubmit (category.id)}>
                                <Card.Img className="cardimg" variant="top" fluid='true' src={category.image} />
                                <Card.Body>
                                    <Card.Title>{category.title}</Card.Title>
                                        <p>Description: {category.description}</p>
                                        <h5></h5>
                                </Card.Body>
                                <Card.Footer>
                                        <small className="text-muted">Category: {category.category}</small>
                                 </Card.Footer>
                        </Card>
                    </div>
                    ))}
                    <br />
                    </CardDeck><br/> 
                </Container> 
            </div>
        )
}
export default Category