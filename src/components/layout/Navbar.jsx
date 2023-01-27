import React from 'react';
import '../layout/Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function navbar() {
	return (
		<Navbar id="navbar" bg="transparent" collapseOnSelect expand="md">
			<Container>
				<Navbar.Brand id="nav-list">
					<Link to="/">rjwada</Link>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" id="navbar-toggler">
					<img src="/menu.svg" alt="X" />
				</Navbar.Toggle>

				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav style={{ marginLeft: 'auto' }}>
						<Nav.Link id="nav-list">
							<Link to="/features">Features</Link>
						</Nav.Link>

						<NavDropdown title="Integration" id="nav-list" menuVariant="dark" align="end">
							<NavDropdown.Item id="shopify">
								<Link to="/services">Shopify</Link>
							</NavDropdown.Item>
						</NavDropdown>

						<Nav.Link href="./Careers" id="nav-list">
							Careers
						</Nav.Link>

						<Nav.Link href="./About" id="nav-list">
							About Us
						</Nav.Link>

						<Nav.Link href="./ScheduleDemo" id="nav-schedule-demo">
							Schedule a demo
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
