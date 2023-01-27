import React from 'react';
import '../layout/Footer.css';


function Footer() {
	return (
		
		<footer >
		
			<div className='footer-box'>
				<div className="box-col1"> 
					<h1 className='footer-h1'>rjwada</h1>
				</div>
				<div className="box-col2"> 
					<h1 className='footer-h2'>We’re here to help your business</h1>
					<a href="#" class="button" >Let’s Connect</a>
				</div>
			</div>
			
			<div className="container-fluid ">
				<div className="row">
					<div className="contact col-md-3 mt-md-0 mt-3">
						<h5 className="text" >Get In Touch!</h5>
						<p>Contact@rjwada.com</p>
						<ul className='social-logo'>
							<a href="" ><img src="instagram.png" alt="HTML tutorial" className='social-logo-size'/></a>
							<a href="#" ><img src="linkedin.png" alt="HTML tutorial" className='social-logo-size'/></a>
							<a href="#" ><img src="twitter.png" alt="HTML tutorial" className='social-logo-size'/></a>
							<a href="#" ><img src="discord.png" alt="HTML tutorial" className='social-logo-size'/></a>
						</ul>
						
					</div>
					<hr className="clearfix w-100 d-md-none pb-0  " />

					<div className="col-md-3 mb-md-0 mb-3">
						<ul className="list">
							<li><h className="text1">Services</h></li>
							<li><a className='linkes' href="#!">Augmented Reality</a></li>
							<li><a className='linkes' href="#!">Virtual Reality</a></li>
							<li><a className='linkes' href="#!">3d & UI/UX </a></li>
							<li><a className='linkes' href="#!">Shopify Integration</a></li>
						</ul>
					</div>

					<div className="col-md-3 mb-md-0 mb-3">						
						<ul className="list">
							<li><h5 className="text1">Insights</h5></li>
							<li><a className='linkes' href="#!">Blogs</a></li>
							<li><a className='linkes' href="#!">Case Study</a></li>
							<li><a className='linkes' href="#!">Newsroom</a></li>
						</ul>
					</div>

					<div className="columns col-md-3 mb-md-0 mb-3">					
						<ul className="list">
							<li><h5 className="text1">Company</h5></li>
							<li><a className='linkes' href="#!">Why us?</a></li>
							<li><a className='linkes' href="#!">Team</a></li>
							<li><a className='linkes' href="#!">Career</a></li>
							<li><a className='linkes' href="#!">Portfolio</a></li>
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


