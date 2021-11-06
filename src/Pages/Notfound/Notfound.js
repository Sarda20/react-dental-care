import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div style={{ display: 'block' }}>
            <div>
                <img src="https://i.ibb.co/WzjyKjV/oops-404-error-with-broken-robot-concept-illustration-114360-1932.jpg" alt="" />
            </div>
            <div>
                <Link to='/'><Button variant="success">Go Back</Button></Link>
            </div>
        </div>
    );
};

export default Notfound;