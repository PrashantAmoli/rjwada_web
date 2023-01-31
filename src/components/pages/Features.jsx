import React from 'react';
import '../pages/Features.css';


function Features() {
	return (
		<div>
			<div className='picture'>
				<img src="featurepage1.png" alt="react logo" className='image8'/>
				<div>
				<div className='header1'>
					<h1 >"Experience the world in a whole new</h1>
					<h1 >way with Augmented Reality."</h1>
				</div>
				<div class="row">
					<div className='header2'>
						<a>See demo </a>
						<a href="#" ><img src="feature-page-arrow.png" alt="HTML tutorial" className='social-logo-size'/></a>
					</div>
				</div>
				
				</div>
			</div>
		</div>
	);
}

export default Features;