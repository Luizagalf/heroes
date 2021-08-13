import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

class Heroe extends React.Component {
    render() {
        const { name, img, fact1, fact2, fact3, fact4, fact5, description } = this.props;
        return (
            <Card>
                <Card.Header className="text-center h5" >{name}</Card.Header>
                <Card.Img src={img} alt={name} />
                <ListGroup variant="flush">
                    <ListGroupItem>{fact1}</ListGroupItem>
                    <ListGroupItem>{fact2}</ListGroupItem>
                    <ListGroupItem>{fact3}</ListGroupItem>
                    <ListGroupItem>{fact4}</ListGroupItem>
                    <ListGroupItem>{fact5}</ListGroupItem>
                </ListGroup>
                <Card.Body>{description}</Card.Body>
            </Card>
        );
    }
}

export default Heroe;