// import '../../styles/NewNavbar.css';

import Link from 'next/link';

const INTEGRATIONS = [{ name: 'Shopify', path: '/services' }];

export default function NewNavbar() {
	return (
		<>
			<nav className="navbar">
				<div className="navbar-container nav-container">
					<input type="checkbox" name="" id="" />
					<div className="hamburger-lines-nav">
						<span className="line-nav line1-nav"></span>
						<span className="line-nav line2-nav"></span>
						<span className="line-nav line3-nav"></span>
					</div>

					<ul className="menu-items-nav">
						<li>
							<Link href="/features">Features</Link>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
								style={{ textDecoration: 'none', color: 'white', background: 'black' }}
							>
								Integrations
							</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								{INTEGRATIONS.map((item, index) => (
									<Link
										key={index}
										href={item.path}
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
							<Link href="/careers">Careers</Link>
						</li>
						<li>
							<Link href="/about">About Us</Link>
						</li>
						<li>
							<div>
								<button className="demoBtn-nav">
									<Link href="/scheduleDemo">Schedule a Demo</Link>
								</button>
							</div>
						</li>
					</ul>
					<h1 className="logo-nav">
						<Link href="/">rjwada</Link>
					</h1>
				</div>
			</nav>

			<div className="emptyBlock-nav"></div>
		</>
	);
}
