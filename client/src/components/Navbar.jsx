import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
import { useNavigate, Link } from 'react-router-dom';
import stepIcon from '/step-icon.png'


const NavbarHome = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/login');
      };
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container fluid>
        <Navbar.Brand href="/" className="NavTitle">Step.io <img src={stepIcon} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className="mx-auto d-flex">
            <Nav className="m-auto">

              <Nav.Link href="#action1" as={Link} to="/">Home</Nav.Link>
              <Nav.Link href="#action1" as={Link} to="/register">Careers</Nav.Link>
              <Nav.Link href="#action2" as={Link} to="/register">Salaries</Nav.Link>
              <Nav.Link href="#action3" as={Link} to="/register">Universities</Nav.Link>
              <Nav.Link href="#action3" as={Link} to="/about">About Us</Nav.Link>
              <Nav.Link href="#action3" as={Link} to="/contact">Contact Us</Nav.Link>
            </Nav>
          </div>
          <Form className="d-flex">
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}
          </Form>
          <Button variant="outline-success" className='NavSignIn' onClick={handleClick}>Sign In</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarHome
