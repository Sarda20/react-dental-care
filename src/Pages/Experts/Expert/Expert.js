import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Expert = (props) => {
    const { name, role, img, description } = props.exp;
    return (
        <Col>
            <Card style={{ width: '26rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{role}</Card.Title>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Expert;