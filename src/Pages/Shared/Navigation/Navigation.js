import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg='light pt-3 pb-3' variant="light">
                <Container>
                    <Navbar.Brand className='header-logo' as={Link} to='/'>LampHub</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='header-text' as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link className='header-text' as={Link} to='/explore'>Explore</Nav.Link>
                            <Nav.Link className='header-text' as={Link} to='/login'>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Navigation;