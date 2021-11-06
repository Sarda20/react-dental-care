import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100 img-holder" style={{ height: '700px' }}
                        src='https://i.ibb.co/gMWncc2/photo-1629909615184-74f495363b67.jpg'
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 img-holder" style={{ height: '700px' }}
                        src='https://i.ibb.co/fdN3RpB/woman-patient-dentist-1303-9355.jpg'
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 img-holder" style={{ height: '700px' }}
                        src='https://i.ibb.co/Nrb8wyD/photo-1626736903650-2289a3b32ed8-1.jpg'
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;