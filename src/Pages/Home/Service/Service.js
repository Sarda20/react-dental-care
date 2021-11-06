import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { id, name, description, img } = props.service;
    return (
        <Col>
            <Card bg="light" border="info" style={{ height: '600px' }}>
                <Card.Img variant="top" src={img} style={{ height: "350px" }} />
                <Card.Body>
                    <Card.Title className='fw-bold'>{name}</Card.Title>
                    <Card.Text className='text-start fst-italic fs-6'>
                        {description}
                    </Card.Text>
                    <Link to={`/booking/${id}`}>
                        <Button style={{ backgroundColor: 'teal' }}>View Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;