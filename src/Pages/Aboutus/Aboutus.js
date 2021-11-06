import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';

const Aboutus = () => {
    const [services] = useServices();
    console.log(services);

    return (
        <Container fluid className='m-5'>
            <Row>
                <Col xs={4} md={4}>
                    <img style={{ width: '300px', height: '200px', marginTop: '25px', marginBottom: '20px' }} src="https://www.ucl.ac.uk/eastman/sites/eastman/files/styles/xl_image/public/new_hospital_building.jpg?itok=0rmxvs7A" alt="" />
                </Col>
                <Col xs={10} md={6} style={{ textAlign: 'justify' }}>
                    <h1>DentalCare</h1>
                    <p>A person’s smile is their most authentic form of self-expression. Your smile is an expression of your inner beauty. It’s our goal to highlight and bring out that beauty through your smile. We are able to help our patients feel confident, excited and smile.

                        When our patients walk into our office we want them to feel like they’ve stepped into a spa or 5-star hotel. They are taken care of, so they feel comfortable and safe. We pay attention to every detail from customer service, to the quality of care each patient receives. We treat each patient with attention, kindness and professionalism. Because that’s how we would like to be treated.
                        We are grateful for the trust our patients give us when we are creating a signature smile for them. When we help people look good, they feel good. It gives them the confidence to go out and make positive real world changes in their lives. It gives them confidence to try new things that could have positive life-changing events. We love being a part of that journey, it makes us feel good.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Aboutus;