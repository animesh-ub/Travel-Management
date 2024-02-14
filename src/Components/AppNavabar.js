import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const AppNavbar = ({ onLogout }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Travel Desk</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link >Home</Nav.Link>
            <Nav.Link Link to="/user/showuser">Admin</Nav.Link>
            <Nav.Link href="/user/employeedashboard">Employee</Nav.Link>
            <Nav.Link href="/user/managerdashboard">Manager</Nav.Link>
            {/* <Nav.Link href="/">Home</Nav.Link>      */}
          </Nav>
          <Nav>
            <Nav.Link onClick={onLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default AppNavbar;