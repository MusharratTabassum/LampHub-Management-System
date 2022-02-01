import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Navigation.css'

const Navigation = () => {
    const { user } = useAuth();

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg='light pt-3 pb-3' variant="light">
                <Container>
                    <Navbar.Brand className='header-logo' as={Link} to='/'>LampsHub</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='header-text' as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link className='header-text' as={Link} to='/explore'>Explore</Nav.Link>

                            {user?.email ?
                                <Nav.Link className='header-text' as={Link} to='/dashboard'>Dashboard</Nav.Link> : ''
                            }

                            {!user?.email &&
                                < Nav.Link className='header-text' as={Link} to="/login">Login</Nav.Link>
                            }


                            {user?.email ?
                                <Nav.Link as={Link} to="/" style={{ color: "black", fontSize: "20px" }}>Hello! {user.displayName}</Nav.Link> : ''
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div >
    );
};

export default Navigation;