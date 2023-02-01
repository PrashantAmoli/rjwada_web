import Link from 'next/link';
// import '../../styles/Footer.css';

function Footer() {
	return (
		<footer className="footer_container">
			<div className="container-fluid ">
				<div className="letsconnect row ">
					<div className="col-md-12 ">
						<h1 className="footer-h1">We’re here to help your business</h1>
						<h1 className="footer-h2">rjwada</h1>
						<Link href={`/`} className="buttonletconnect" style={{ textDecoration: 'none', color: 'black' }}>
							Let&apos;s Connect
						</Link>
					</div>
				</div>
			</div>

			<div className="grid_container">
				<div className="gridcol ">
					<ul className="list_footer">
						<li>
							<h5 className="text">Get In Touch!</h5>
						</li>
						<li>
							<h5 className="text2">contact@rjwada.com</h5>
						</li>
						<li>
							<div className="socialimage">
								<Link href={`/`} className="button" style={{ textDecoration: 'none', background: 'transparent' }}>
									<img src="instagram.png" alt="HTML tutorial" className="social-logo-size" />
								</Link>

								<Link href={`/`} className="button" style={{ textDecoration: 'none', background: 'transparent' }}>
									<img src="linkedin.png" alt="HTML tutorial" className="social-logo-size" />
								</Link>

								<Link href={`/`} className="button" style={{ textDecoration: 'none', background: 'transparent' }}>
									<img src="twitter.png" alt="HTML tutorial" className="social-logo-size" />
								</Link>

								<Link href={`/`} className="button" style={{ textDecoration: 'none', background: 'transparent' }}>
									<img src="discord.png" alt="HTML tutorial" className="social-logo-size" />
								</Link>
							</div>
						</li>
					</ul>
				</div>

				<div className="gridcol" style={{ backgroundColor: 'transparent' }}>
					<ul className="list_footer">
						<li>
							<h1 className="text1">Services</h1>
						</li>
						<li>
							<Link href={`/`} className="linkes" style={{ textDecoration: 'none', color: 'white' }}>
								Augmented Reality
							</Link>
						</li>
						<li>
							<Link href={`/`} className="linkes" style={{ textDecoration: 'none', color: 'white' }}>
								Virtual Reality
							</Link>
						</li>
						<li>
							<Link href={`/`} className="linkes" style={{ textDecoration: 'none', color: 'white' }}>
								3d & UI/UX
							</Link>
						</li>
						<li>
							<Link href={`/`} className="linkes" style={{ textDecoration: 'none', color: 'white' }}>
								Shopify Integration
							</Link>
						</li>
					</ul>
				</div>

				<div className="gridcol">
					<ul className="list_footer">
						<li>
							<h5 className="text1">Insights</h5>
						</li>
						<li>
							<Link href="/Blogs" className="linkes" style={{ textDecoration: 'none', color: 'white' }}>
								Blogs
							</Link>
						</li>
						<li>
							<Link href={`/`} className="linkes" style={{ textDecoration: 'none', color: 'white' }}>
								Case Study
							</Link>
						</li>
						<li>
							<Link href={`/`} className="linkes" style={{ textDecoration: 'none', color: 'white' }}>
								Newsroom
							</Link>
						</li>
					</ul>
				</div>
			</div>

			<hr className="new4"></hr>
			<div className="copyright text-center py-3">© 2022 rjwada All rights reserved</div>
		</footer>
	);
}

export default Footer;
