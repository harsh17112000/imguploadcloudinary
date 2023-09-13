import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <Navbar expand="lg" bg='dark' variant='dark' style={{height:"60px"}}>
                <Container>
                    <NavLink className="text-decoration-none text-light" to="/">Home</NavLink>
                </Container>
            </Navbar>
        </>
    )
}

export default Header