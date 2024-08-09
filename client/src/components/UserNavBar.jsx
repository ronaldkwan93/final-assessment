import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
import { useNavigate, Link } from 'react-router-dom';
import profileIcon from '/user.png'
import stepIcon from '/step-icon.png'



const UserNavBar = () => {
    const navigate = useNavigate();
    const onClick = () => {
      localStorage.clear();
    }
    const handleClick = () => {
        navigate('/login');
      };
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container fluid>
        <Navbar.Brand href="#" className="NavTitle" as={Link} to='/member'>Step.io <img src={stepIcon} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className="mx-auto d-flex">
            <Nav className="m-auto">
              <Nav.Link href="#action1" as={Link} to='/careers'>Careers</Nav.Link>
              <Nav.Link href="#action2" as={Link} to='/salaries'>Salaries</Nav.Link>
              <Nav.Link href="#action3" as={Link} to='/universities'>Universities</Nav.Link>
              
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

              <Nav.Link href="#action1" as={Link} to='/member' className='navMember'><img src={profileIcon} alt="Profile" class="memberbtn" /></Nav.Link>
          <Button variant="outline-success" className='NavSignIn' as={Link} to='/' onClick={onClick}>Sign out</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default UserNavBar
