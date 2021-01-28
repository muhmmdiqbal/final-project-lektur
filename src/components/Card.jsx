import React, { useEffect, Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Detail from '../page/Detail'
import { dataCourse } from '../store/actions/users'
import { Card, Container, CardDeck, CardGroup} from 'react-bootstrap'
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
    // const{data} = this.state
// {id, image, name, title, category, description}

const LearnCard = ({title = ""}) => {
    const data = useSelector (state => state.course)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(dataCourse());
    }, []);
    console.log(data, 'item course')
    return (
    <div>
        <Container >
        {data.map((data) => (
            <CardGroup>
            <CardDeck className="cardList">
            <div>
                    <Card className="Card" key={data.id} ><a href="Detail" className="Judul stretched-link">
                        <Card.Img className="cardimg" variant="top" fluid={true} alt="Card image" src={data.image}/></a>
                        <Card.Body>
                            <Card.Title>{data.title}</Card.Title>
                        <small className="text-muted">{data.name}</small>
                        <Card.Text>{data.description}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">{data.category}game</small>
                        </Card.Footer>
                    </Card>
                
                
                    </div>
                <br />
            </CardDeck>
            </CardGroup>
            ))}
            <br />
        </Container> 
        
    </div>
    )
}

export default LearnCard