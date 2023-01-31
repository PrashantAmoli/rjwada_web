import { Link } from 'react-router-dom';
import './NewNavbar.css';

const INTEGRATIONS = [{ name: 'Shopify', path: '/services' }];

export default function NewNavbar() {
	return (
		<>
			<nav className="navbar">
				<div className="navbar-container nav-container">
					<input type="checkbox" name="" id="" />
					<div className="hamburger-lines">
						<span className="line line1"></span>
						<span className="line line2"></span>
						<span className="line line3"></span>
					</div>

					<ul className="menu-items">
						<li>
							<Link to="/features">Features</Link>
						</li>
						<li className="nav-item dropdown">
							<Link
								className="nav-link dropdown-toggle"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
								style={{ textDecoration: 'none', color: 'white', background: 'black' }}
							>
								Integrations
							</Link>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								{INTEGRATIONS.map((item, index) => (
									<Link
										key={index}
										to={item.path}
										className="dropdown-item"
										style={{
											textDecoration: 'none',
											color: 'white',
											background: 'transparent',
										}}
									>
										{item.name}
									</Link>
								))}
							</div>
						</li>
						<li>
							<Link to="/careers">Careers</Link>
						</li>
						<li>
							<Link to="/about">About Us</Link>
						</li>
						<li>
							<div>
								<button className="demoBtn">
									<Link to="/scheduleDemo">Schedule a Demo</Link>
								</button>
							</div>
						</li>
					</ul>
					<h1 className="logo">
						<Link to="/">
							<a>rjwada</a>
						</Link>
					</h1>
				</div>
			</nav>

			<div className="emptyBlock"></div>
		</>
	);
}
