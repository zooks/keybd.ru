import React from 'react'
import {NavLink} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import DarkMode from '../DarkMode';
// import NavDropdown from 'react-bootstrap/NavDropdown';

export function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    <span>Typing</span><span className="red">.su</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarSupportedContent" />
                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                    >
                        <Nav.Link as={NavLink} to="/" eventKey="0">Раскладка</Nav.Link>
                        <Nav.Link as={NavLink} to="/emoji" eventKey="1">Эмоджи</Nav.Link>
                        <Nav.Link as={NavLink} to="/text-case" eventKey="2">Регистр текста</Nav.Link>
                    </Nav>
                    <div className="navbar-collapse-end">
                        <DarkMode />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}