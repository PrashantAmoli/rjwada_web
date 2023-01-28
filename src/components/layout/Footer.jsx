import React from 'react';
import '../layout/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer>
			<div className="container-fluid ">
				<div className="letsconnect row ">
					<div className="col-md-6 mb-md-0 mb-2">
						<h1 className="footer-h1">rjwada</h1>
					</div>

					<div className="col-md-6 mb-md-0 mb-2">
						<h1 className="footer-h2">We’re here to help your business</h1>

						<Link to="#" class="button" style={{ textDecoration: 'none', color: 'black' }}>
							Let’s Connect
						</Link>
					</div>
				</div>
			</div>

			<div className="container-fluid ">
				<div className="row">
					<div className="contact col-md-3 mt-md-0 mt-3">
						<h5 className="text">Get In Touch!</h5>
						<p>Contact@rjwada.com</p>
						<ul className="social-logo">
							<Link to="#" class="button" style={{ textDecoration: 'none', background: 'transparent' }}>
								<img src="instagram.png" alt="HTML tutorial" className="social-logo-size" />
							</Link>
							<Link to="#" class="button" style={{ textDecoration: 'none', background: 'transparent' }}>
								<img src="linkedin.png" alt="HTML tutorial" className="social-logo-size" />
							</Link>
							<Link to="#" class="button" style={{ textDecoration: 'none', background: 'transparent' }}>
								<img src="twitter.png" alt="HTML tutorial" className="social-logo-size" />
							</Link>
							<Link to="#" class="button" style={{ textDecoration: 'none', background: 'transparent' }}>
								<img src="discord.png" alt="HTML tutorial" className="social-logo-size" />
							</Link>
						</ul>
					</div>
					<hr className="clearfix w-100 d-md-none pb-0  " />

					<div className="col-md-3 mb-md-0 mb-3">
						<ul className="list">
							<li>
								<h className="text1">Services</h>
							</li>
							<li>
								<Link to="#" className="linkes" style={{ textDecoration: 'none', color: 'white' }}>
									Augmented Reality
								</Link>
							</li>
							<li>
								<Link to="#" className="linkes" style={{ textDecoration: 'none', color: 'white' }}>
									Virtual Reality
								</Link>
							</li>
							<li>
								<Link to="#" className="linkes" style={{ textDecoration: 'none', color: 'white' }}>
									3d & UI/UX
								</Link>
							</li>
							<li>
								<Link to="#" className="linkes" style={{ textDecoration: 'none', color: 'white' }}>
									Shopify Integration
								</Link>
							</li>
						</ul>
					</div>

					<div className="col-md-3 mb-md-0 mb-3">
						<ul className="list">
							<li>
								<h5 className="text1">Insights</h5>
							</li>
							<li>
								<Link to="#" className="linkes" style={{ textDecoration: 'none', color: 'white' }}>
									Blogs
								</Link>
							</li>
							<li>
								<Link to="#" className="linkes" style={{ textDecoration: 'none', color: 'white' }}>
									Case Study
								</Link>
							</li>
							<li>
								<Link to="#" className="linkes" style={{ textDecoration: 'none', color: 'white' }}>
									Newsroom
								</Link>
							</li>
						</ul>
					</div>

					<div className="columns col-md-3 mb-md-0 mb-3">
						<ul className="list">
							<li>
								<h5 className="text1">Company</h5>
							</li>
							<li>
								<Link to="#" className="linkes" style={{ textDecoration: 'none', color: 'white' }}>
									Why us?
								</Link>
							</li>
							<li>
								<Link to="#" className="linkes" style={{ textDecoration: 'none', color: 'white' }}>
									Team
								</Link>
							</li>
							<li>
								<Link to="#" className="linkes" style={{ textDecoration: 'none', color: 'white' }}>
									Career
								</Link>
							</li>
							<li>
								<Link to="#" className="linkes" style={{ textDecoration: 'none', color: 'white' }}>
									Portfolio
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<hr class="new4"></hr>
			<div className="copyright text-center py-3">© 2022 rjwada All rights reserved</div>
		</footer>
	);
}

export default Footer;
