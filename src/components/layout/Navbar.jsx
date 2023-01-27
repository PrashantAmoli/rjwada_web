import React from 'react'
import '../layout/Navbar.css'
import { Link } from 'react-router-dom'

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

export default function navbar() {
  return (

    // <Navbar id="navbar" collapseOnSelect expand="md" >
    //   <Container>
    //     <Navbar.Brand href="#brand" id="nav-list">rjwada</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" id="navbar-toggler"/>
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav style={{ marginLeft:'auto'}} >

    //         <Nav.Link href="./Features" id="nav-list">Features</Nav.Link>

    //         <NavDropdown title="Integration" id="nav-list" menuVariant="dark" align="end">
    //           <NavDropdown.Item href="./Shopify" id="shopify">Shopify</NavDropdown.Item>
    //         </NavDropdown>

    //         <Nav.Link href="./Careers" id="nav-list">Careers</Nav.Link>

    //         <Nav.Link href="./About" id="nav-list">About Us</Nav.Link>

    //         <Nav.Link href="./ScheduleDemo" id="nav-schedule-demo">Schedule a demo</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/careers">Careers</Link>
        </li>
      </ul>
    </nav>
    </>
  )
}
