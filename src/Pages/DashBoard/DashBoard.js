import React from 'react';
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import "./DashBoard.css"

const DashBoard = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#" className='ms-4 dashboard-text'>Dashboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Lampshub</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link as={Link} className='dashboard-link' to="/home">Home</Nav.Link>
                                {
                                    user?.email === "admin@admin.com" ?
                                        < Nav >
                                            <Nav.Link as={Link} className='dashboard-link' to="/managebookings">Manage Orders</Nav.Link>
                                            <Nav.Link as={Link} className='dashboard-link' to="/addproduct">Add Product</Nav.Link>
                                            <Nav.Link as={Link} className='dashboard-link' to="/allbookings">All Orders</Nav.Link>
                                            <Nav.Link as={Link} className='dashboard-link' to="/manageproducts">Manage Product</Nav.Link>
                                        </Nav> :
                                        <Nav>
                                            <Nav.Link as={Link} className='dashboard-link' to="/myorders">My Orders</Nav.Link>

                                            <Nav.Link as={Link} className='dashboard-link' to="/payment">Payment</Nav.Link>
                                            <Nav.Link as={Link} className='dashboard-link' to="/addreview">Review Us</Nav.Link>
                                        </Nav>

                                }


                                <Nav.Link className='header-text' style={{ color: "blue" }} >
                                    {user?.email &&
                                        <Button className='p-0 logout-btn ' onClick={logOut} variant="light">Logout</Button>
                                    }
                                </Nav.Link>

                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>


        </div >
    );
};

export default DashBoard;