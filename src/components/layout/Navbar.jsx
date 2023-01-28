import React from 'react';
import '../layout/Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function navbar() {
	return (
		<Navbar id="navbar" collapseOnSelect expand="md">
			<Container>
				<Navbar.Brand id="nav-list">
					<Link to="/" className="Link-style" style={{ textDecoration: 'none', color: 'white' }}>
						rjwada
					</Link>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" id="navbar-toggler">
					<img src="toggler.png" className="toggler-image" />
				</Navbar.Toggle>

				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav style={{ marginLeft: 'auto' }}>
						<Nav.Link id="nav-list">
							<Link to="/Features" style={{ textDecoration: 'none', color: 'white' }}>
								Features
							</Link>
						</Nav.Link>

						<NavDropdown title="Integration" id="nav-list" menuVariant="dark" align="end">
							<NavDropdown.Item id="shopify">
								<Link to="/Shopify" style={{ textDecoration: 'none', color: 'white' }}>
									Shopify
								</Link>
							</NavDropdown.Item>
						</NavDropdown>

						<Nav.Link id="nav-list">
							<Link to="/Careers" style={{ textDecoration: 'none', color: 'white' }}>
								Careers
							</Link>
						</Nav.Link>

						<Nav.Link id="nav-list">
							<Link to="/About" style={{ textDecoration: 'none', color: 'white' }}>
								About Us
							</Link>
						</Nav.Link>

						<Nav.Link id="nav-schedule-demo">
							<Link to="/ScheduleDemo" style={{ textDecoration: 'none', color: 'white' }}>
								Schedule a demo
							</Link>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
