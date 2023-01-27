import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../pages/Features.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Features() {
	return (
		
		<><div className='picture'>
			<img src="featurepage1.png" alt="react logo" className='image8' />
			<div>
				<div className='header1'>
					<h1>"Experience the world in a whole new</h1>
					<h1>way with Augmented Reality."</h1>
				</div>

				<div class="row">
					<div className='header2'>
						<a>See demo </a>
						<a href="#"><img src="feature-page-arrow.png" alt="HTML tutorial" className='social-logo-size' /></a>
					</div>
				</div>

			</div>
		</div><br />
		<div className='card-box'>
				<div class="row">
					<div class="column">
						<img src="ar-try-on.png" alt="react logo" className='card1' />
					</div>
					<div class="column">
						<h2 className='card-text1'>AR TRY ON</h2>
						<p className='card-text2'>Try on before you buy: enhance your shopping experience with our Augmented Reality.</p>
					</div>
				</div>
			</div><br />
			<div className='card-box'>
				<div class="row">
					<div class="column">
						<h2 className='card-text1'>3D View</h2>
						<p className='card-text2'>Check the 360 view for all your product with on your fingertips.</p>
					</div>
					<div class="column">
						<img src="3d-view.png" alt="react logo" className='card1' />
					</div>
				</div>
			</div><br />
			<div className='card-box'>
				<div class="row">
					<div class="column">
						<img src="surface-view.png" alt="react logo" className='card1' />
					</div>
					<div class="column">
						<h2 className='card-text1'>Surface View</h2>
						<p className='card-text2'>Surface view to check your product in real world making choice for the product more useful</p>
					</div>
				</div>
			</div><br /><br /><br /><br /><br /><br/><br/>
			<div className="text3">A dashboard to get all the requirement fullfilled</div>
			<div className="text3">3D assets for all the product</div>
			<div > <img  src="3d-assets.png" alt="" className="assets-img"/></div>
			<br/><br /><br /><br /><br /><br /><br/><br/>
		</>
	);
}

export default Features;