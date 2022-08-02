import React from 'react'
import logo from '../assets/img/vtf-logo.png'
import { Link } from 'react-router-dom'

import {Container, Nav, Navbar } from 'react-bootstrap';

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#">
                    <span class="logo">
                        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                            <img src={logo} alt="Web Logo"/ >
                            <span class="fs-4 text-info text-opacity-75 logo-caption">Virtually Testing Foundation</span>
                        </a>
                    </span>
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                
                <Navbar.Collapse>

                    <Nav className="justify-content-end flex-grow-1">
                        <Nav.Link href="#Introduction">Introduction</Nav.Link>
                        <Link to="/CallForPaper">Call for Paper</Link>
                        <Nav.Link href="#FAQ">FAQ</Nav.Link>
                        <Nav.Link href="#">Stay Updated</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header