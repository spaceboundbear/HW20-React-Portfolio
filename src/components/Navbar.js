import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';

function topNav() {
  return (
    <Navbar bg="dark" variant="dark" className="sticky-top">
      <Container>
        <Navbar.Brand className="d-none d-sm-block" to="/about">
          Michael Fischer
        </Navbar.Brand>
        <Nav className="justify-content-end  mx-auto mx-md-0">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
          <NavLink className="nav-link" to="/portfolio">
            Portfolio
          </NavLink>
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
          <NavLink className="nav-link" to="/resume">
            Resume
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default topNav;
