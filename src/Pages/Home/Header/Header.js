import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand='lg'>
                <Container>
                    <Navbar.Brand href="#home">Dental Care</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/experts">Experts</Nav.Link>
                        {
                            user.email ?
                                <div>
                                    <Button onClick={logout}>Logout</Button>
                                    <Navbar.Text style={{ marginLeft: '10px' }}>
                                        Signed in as: <a href="#login">{user.displayName}</a>
                                    </Navbar.Text>
                                </div>

                                :

                                <Nav.Link as={Link} to="/login"><Button>Login</Button></Nav.Link>

                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;