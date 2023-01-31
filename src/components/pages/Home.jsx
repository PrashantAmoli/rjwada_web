import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css'


function Home() {
	return (
	<Container fluid className='home'>

		<Container fluid className='heading'>
			<h1 class="text-lg-center" className='heading-1' >SCALE YOUR <span className='blue-text'><em>BUSINESS</em> </span> WITH US</h1>
			<h6 class="text-lg-center" className='sub-heading-1'>Dynamic Deep tech to increase your conversion rate <br/> and lower the return rate on your products</h6>
			<div className='button-0'>
				<div className='sub-button-0'>
				<p>Speak with us</p>
				<img src={'/Vector.png'}/>
				</div>
			</div>
		</Container>
		


		<Container fluid  className='container-1'>
			<Row  className='container-1-row'>
			<Col  className="text-center container-1-image">
				<img src={'/ezgif 5.png'}  />
			</Col>
			<Col className='container-col-1' >
			<div className='sub-container-1'>
				<div >
					<h3 className='container-1-heading'>TRY OUT ALL THE FUTURISTIC <br/> FEATURES</h3>
				</div>
				<div className='sub-2-container-1'>
					<p>A complete new feature for the new you. Be a model of your own. Try as many clothes as you want</p>
					<p>NO TIME CONSTRAINTS!</p>
				</div>
				<div className='button-group'>
					<button className='button-group-1'>3D VIEW</button>
					<button className='button-group-2'>VIEW AR</button>
				</div>
			</div>
			</Col>
			</Row>
		</Container>	

			

		<Container fluid className='container-2'>
			<Row className='container-2-row'>			
			<h1 className='container-2-heading'>Lets Enter the future from here</h1>
			<h3 className='container-2-subheading-1'>A world of <span className='blue-text'>3D</span>, <span className='blue-text'>AR</span> & <span className='blue-text'>VIRTUAL TRY ON </span>awaits you </h3>
			<h6 className='container-2-subheading'>Made for future. Made for you.<br/>Celebrate the uniqueness with us.</h6>
			<div  className="container-2-div">
				<button type='button' className='btn1'>STEP-IN</button>
			</div>
			</Row>
		</Container>

		<Container fluid className='container-3'>
			<Row >
			<Col md={5} lg={6} xl={6}>
			<div className='sub-container-3'>
				<button type='button' className='btn2'>Fun Facts</button>
				<h2 className='container-3-heading' style={{color:'#7EE687'}}>20% Increase </h2>
				<p >In conversion rate, when you use AR technology</p>
				<h2 className='container-3-heading'>40% Decrease </h2>
				<p>In product return rate, when you use AR technology</p>
			</div>
			</Col>
			<Col md={7} lg={6} xl={6} className="text-center">
				<img src={'/ezgif 3.png'} className='container-3-image' />
			</Col>
			</Row>
		</Container>

		<Container fluid className='container-4'>
			<div className='container-4-row'>
				<div className='sub-1-container-4'>
					<div className='container-4-col-1-div-1'>
						<div className='container-4-col-1-div-1-img'>
							<img src={'dashboard (2) 1.png'}></img>
						</div>
						<div className='container-4-col-1-div-1-2'>
							1
						</div>
					</div>
					<div className='container-4-col-1-div-2'>
						<h2>Integrate on <br/><span class='blue-text'>dashboard</span></h2>
						<p>Easy Integration with <br/>dashboard via shopify.</p>
					</div>
					<div className='container-4-col-1-div-3'>
						Instant Integration
					</div>
				</div>
				<div className='sub-2-container-4'>
					<div className='container-4-col-2-div-1'>
						<div className='container-4-col-2-div-1-img'>
							<img src={'augmented-reality 1.png'}></img>
						</div>
						<div className='container-4-col-2-div-1-2'>
							2
						</div>
					</div>
					<div className='container-4-col-2-div-2'>
						<h2>Upload <span class='blue-text'>3D</span> <br/>Models</h2>
						<p>Get 3d models after <br/>integrating on dashboard</p>
					</div>
					<div className='container-4-col-2-div-3'>
						3-5 days for models
					</div>
				</div>
				<div className='sub-3-container-4'>
					<div>
						<img src={"/ezgif 4.png"}/>
					</div>
				</div>
			</div>
		</Container>


		<Container className="justify-content-md-center">
			<div className="why">
				<Row className="py-5">
					<h2 className="text-center" style={{ marginLeft: -30 }}>
						Why choose <span>Rjwada?</span>
					</h2>

					<Col md={6}>
						<img src={"/icon4.png"} alt="" />
						<h3>
							<span>Enhancing</span>
						</h3>
						<p>
							the overall online shopping experience for customers
							<br />
							with our inbuilt technology.
							<br />
							Lets take a closer look.
						</p>
					</Col>
					<Col md={6}>
						<img src={"/logo.png"} alt="" style={{ width: 60, margin: -7 }} />
						<h3>
							<span>Confidence</span>
						</h3>
						<p>
							to customers for choosing <br />
							the best product. 71% of consumers say they would shop <br />
							more often if they used augmented reality,
						</p>
					</Col>
				</Row>
				<Row className="py-5">
					<Col>
						<img src={"/icon6.png"} alt="" />
						<h3>
							<span>3D Models</span>
						</h3>
						<p>
							which will bring life to <br />
							your digital product. Making shopping more fun.
						</p>
					</Col>
					<Col>
						<img src={"/icon5.png"} alt="" />
						<h3>
							<span>Integration</span>
						</h3>
						<p>
							we provide hassle free integration for your
							<br />
							integration.
						</p>
					</Col>
				</Row>
			</div>
		</Container>
		</Container>
				
	)
	
}

export default Home;

