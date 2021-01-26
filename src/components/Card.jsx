import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataCourse } from '../store/actions/users'
// import Detail from '../page/Detail'
import { Card, Container, CardDeck, CardColumns, Image } from 'react-bootstrap'
// import axios from 'axios'
// import { 
//     Switch,
//     Route,
//     Link
//   } from 'react-router-dom';

// class learnCard extends Component {
//     constructor(){
//         super()
//         this.state = {
//           data: []
//         }
//     }

//     componentDidMount(){
//         axios.get("https://lektur.kuyrek.com/courses/all")
//     .then(res => { console.log(res, 'TS2')
//         const data = res.data.data
//         this.setState({data});
//     })
//     .catch(err => console.log('parsing data is failed, err'))

//     }

// render() {
//     const{data} = this.state
//     console.log(data, 'CH')
const LearnCard = () => {
    const item = useSelector (state => state.user)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(dataCourse());
    }, []);
    console.log(item)
    return (
    <div>
        <Container >
            <CardDeck className="cardList">
            <div>
                    <Card className="Card" key={item.id} ><a href="Detail" className="Judul stretched-link">
                        <Card.Img className="cardimg" as={Image} variant="top" fluid={true} alt="Card image" src={item.image}/></a>
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                        <small className="text-muted">{item.name}</small>
                        <Card.Text>{item.description}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">{item.category}</small>
                        </Card.Footer>
                    </Card>
                    </div>
                <br />
            </CardDeck><br />
        </Container> 
        
    </div>
    )
}

export default LearnCard