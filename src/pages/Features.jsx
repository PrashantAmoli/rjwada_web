import React from 'react';
import { Routes, Route } from 'react-router-dom';
import style from '../styles/Features.module.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

function Features() {
	return (
		<>
			<div className={`${style.article}`}>
				<img className={`${style.image}`} src="featurepage1.png" alt="background" />

				<div class="row">
					<div className={`${style.header}`}>
						<h1 className={`${style.headertext1}`}>"Experience the world in a whole new</h1>
						<h1 className={`${style.headertext1}`}>way with Augmented Reality."</h1>
						<a className={`${style.headertext2}`} style={{ textDecoration: 'none', color: 'white' }}>
							See Demo{' '}
						</a>
						<Link to="#" style={{ textDecoration: 'none', color: 'white' }}>
							<img src="feature-page-arrow.png" alt="HTML tutorial" className={`${style.social_logo_size}`} />
						</Link>
					</div>
				</div>
			</div>

			<br />

			<div className="container-fluid ">
				<div className={`row ${style.template1}`}>
					<div className=" col-md-6 mb-md-0 mb-2">
						<img src="ar-try-on.png" alt="react logo" className={style.card1} />
					</div>

					<div className={` ${style.template_col} col-md-6 mb-md-0 mb-2`}>
						<h2 className={style.card_text1}>AR TRY ON</h2>
						<p className={style.card_text2}>Try on before you buy: enhance your shopping experience with our Augmented Reality.</p>
					</div>
				</div>
			</div>
			<br />
			<div className="container-fluid ">
				<div className="row">
					<div className=" col-md-6 mb-md-0 mb-2">
						<h2 className={style.card_text1}>3D View</h2>
						<p className={style.card_text2}>Check the 360 view for all your product with on your fingertips.</p>
					</div>

					<div className="col-md-6 mb-md-0 mb-2">
						<img src="3d-view.png" alt="" className={style.card1} />
					</div>
				</div>
			</div>
			<br />
			<div className="container-fluid ">
				<div className={`${style.template1} row`}>
					<div className="col-md-6 mb-md-0 mb-2">
						<img src="surface-view.png" alt="react logo" className={style.card1} />
					</div>

					<div className="col-md-6 mb-md-0 mb-2">
						<h2 className={style.cardt_ext1}>Surface View</h2>
						<p className={style.card_text2}>Surface view to check your product in real world making choice for the product more useful</p>
					</div>
				</div>
			</div>

			<br />
			<br />
			<br />
			<br />
			<br />
			<div className={style.text3}>A dashboard to get all the requirement fullfilled</div>
			<div className={style.text3}>3D assets for all the product</div>
			<div>
				{' '}
				<img src="3d-assets.png" alt="" className={style.assets_img} />
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</>
	);
}

export default Features;
