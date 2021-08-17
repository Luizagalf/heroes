import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

class Heroe extends React.Component {
    render() {
        const { name, img, facts, description } = this.props;
        return (
            <Card>
                <Card.Header className="text-center h5" >{name}</Card.Header>
                <Card.Img src={img} alt={name} />
                <ListGroup variant="flush">
                    {
                        facts.map(fact => {
                            return (
                                <ListGroupItem>{fact}</ListGroupItem>
                            )
                        })
                    }
                </ListGroup>
                <Card.Body>{description}</Card.Body>
            </Card>
        );
    }
}

export default Heroe;