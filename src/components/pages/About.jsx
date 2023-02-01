import 'bootstrap/dist/css/bootstrap.min.css';

// import TeamPhoto from '../../images/team-img.png';
// import Rating1Img from '../../images/rating1.png';
// import Leadership1Img from '../../images/leadership1.png';
// import Pattern1Img from '../../images/pattern1.png';
// import Linkedin1Img from '../../images/linkedin1.png';

// import AbhinavVermaImg from '../../images/abhinav-verma.png';
// import AdityaAnandImg from '../../images/aditya-anand.png';
// import AnkitImg from '../../images/ankit.png';
// import RajvardhanRayImg from '../../images/rajvardhan-ray.png';
// import SugandhMalikImg from '../../images/sugandh-malik.png';
// import YashVardhanSinghImg from '../../images/yash-vardhan-singh.png';

// import '../../styles/About.css';

const TeamPhoto = '/images/team-img.png';
const Linkedin1Img = '/images/linkedin1.png';

const VISION = [
	{
		title: 'Experience',
		desc: 'We take credit, offering the world with the most beautiful and intuitive experiences, that almost feel real through our AR/VR technologies.',
		img: '/images/rating1.png',
	},
	{
		title: 'Leader',
		desc: 'Aspiring to be the number one Global leader in the ecommerce business of AR/VR technologies',
		img: '/images/leadership1.png',
	},
	{
		title: 'Innovation',
		desc: 'We are the pioneers of AR/VR technologies in the ecommerce industry, and we are here to stay.',
		img: '/images/pattern1.png',
	},
];

const TEAM = [
	{
		name: 'Abhinav Verma',
		img: '/images/abhinav-verma.png',
		linkedin: 'https://www.linkedin.com/in/abhinav-verma-1a1b3b1a1/',
		role: 'Co-Founder & CEO',
	},
	{
		name: 'Yash Vardhan Singh',
		img: '/yash-vardhan-singh.png',
		linkedin: 'https://www.linkedin.com/in/yash-vardhan-singh-0a8b3b1a1/',
		role: 'Co-Founder & MD',
	},
	{
		name: 'Ankit Yadav',
		img: '/images/ankit.png',
		linkedin: 'https://www.linkedin.com/in/ankit-agarwal-0a8b3b1a1/',
		role: 'Technical Lead',
	},
	{
		name: 'Aditya Anand',
		img: '/images/aditya-anand.png',
		linkedin: 'https://www.linkedin.com/in/aditya-anand-0a8b3b1a1/',
		role: 'Brand Success Manager',
	},
	{
		name: 'Rajvardhan Ray',
		img: '/images/rajvardhan-ray.png',
		linkedin: 'https://www.linkedin.com/in/rajvardhan-ray-0a8b3b1a1/',
		role: 'UI/UX Lead',
	},
	{
		name: 'Sugandh Malik',
		img: '/images/sugandh-malik.png',
		linkedin: 'https://www.linkedin.com/in/sugandh-malik-0a8b3b1a1/',
		role: 'Senior 3D Generalist',
	},
];

const About = () => {
	return (
		<div className="about-page ">
			{/* <div className="about-text1 ">
				<div className="about-text1-center">
					<div>
						<span className="white-text">We at rjwada are creating high </span>
					</div>

					<div>
						<span className="blue-text"> customer engagement </span> <span className="white-text"> and </span> <span> low return rates </span>
					</div>

					<div>
						<span className="blue-text"> rates </span>
						<span className="white-text"> with our future ready AR tech</span>
					</div>
				</div>
			</div> */}

			<div className="about_moto">
				<h1 className="about_heading">
					We at rjwada are creating <span className="blue-text">high customer engagement</span> and{' '}
					<span className="blue-text">low return rates</span> with our future ready AR tech
				</h1>
			</div>

			<div className="team-photo">
				<img src={TeamPhoto} alt="" />
			</div>

			<div className="about-text2 my-5">
				<div className="about-us-box">
					<h1 className="about_heading">About us</h1>
					<div className="about_details">
						<p>RJWADA is an augmented reality based startup, an initiative by IITD students. Enhancing the online.</p>
						<p>Shopping experience for our users is our sole motto. Easy, Reliable, Trustworthy ain't just attractive</p>
						<p>adjectives we mean it. We are shaping the future of shopping via our AR and 3D try on.</p>
						<p>
							We are the present. <br />
							We are the future.
						</p>
						<p></p>
					</div>
				</div>
			</div>

			<div className="vision">
				<h1 className="about_heading">Our Vision </h1>

				<div className="visionBox">
					{VISION.map((item, index) => (
						<div className="visionCard" key={index}>
							<img src={item.img} alt="" />
							<h2>{item.title}</h2>
							<p>{item.desc}</p>
						</div>
					))}
				</div>

				{/* <div className="visioncards">
					<div className="row row-cols-1 row-cols-md-3">
						<div className="col mb-4">
							<div className="card card1">
								<img src={Rating1Img} alt="" style={{ width: '85px' }} />
								<h1 className="title">Experience</h1>
								<p className="desc">
									We take credit, offering the world with the most beautiful and intuitive experiences, that almost feel real through our AR/VR
									technologies.
								</p>
							</div>
						</div>

						<div className="col mb-4">
							<div className="card card2">
								<img src={Leadership1Img} alt="" style={{ width: '85px' }} />
								<h1 className="title">Leader</h1>
								<p className="desc">Aspiring to be the number one Global leader in the ecommerce business of AR/VR technologies </p>
							</div>
						</div>

						<div className="col mb-4">
							<div className="card card3">
								<img src={Pattern1Img} alt="" style={{ width: '85px' }} />
								<h1 className="title">Seamless</h1>
								<p className="desc">Our goal is to provide seamless tryon experiences for people, be it any corner of the world. </p>
							</div>
						</div>
					</div>
				</div> */}
			</div>

			<div className="creators">
				{/* <div className="title-box">
					<span className="title">
						Meet our team of <span className="blue-text">creators, designers,</span> and world-class{' '}
						<span className="blue-text">problem solvers.</span>
					</span>
				</div> */}

				<div className="about_moto">
					<h1 className="about_heading">
						Meet our team of <span className="blue-text">creators, designers,</span> and world class{' '}
						<span className="blue-text">problem solvers</span>.
					</h1>
				</div>

				<div className="about_cards_grid">
					{TEAM.map((item, index) => (
						<div className="creatorCard" key={index}>
							<img src={item.img} alt="name" className="creatorImage" />
							<div className="creatorInfo">
								<span className="creatorName">{item.name}</span>
								<span className="creatorRole">{item.role}</span>
								<a href={item.linkedin} target="_blank">
									<svg
										fill="#ffffff"
										version="1.1"
										id="Capa_1"
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
										width="64px"
										height="64px"
										viewBox="0 0 93.06 93.06"
										xml:space="preserve"
									>
										<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
										<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
										<g id="SVGRepo_iconCarrier">
											{' '}
											<g>
												{' '}
												<g>
													{' '}
													<path d="M11.185,0.08C5.004,0.08,0.001,5.092,0,11.259c0,6.173,5.003,11.184,11.186,11.184c6.166,0,11.176-5.011,11.176-11.184 C22.362,5.091,17.351,0.08,11.185,0.08z"></path>{' '}
													<rect x="1.538" y="30.926" width="19.287" height="62.054"></rect>{' '}
													<path d="M69.925,29.383c-9.382,0-15.673,5.144-18.248,10.022h-0.258v-8.479H32.921H32.92v62.053h19.27V62.281 c0-8.093,1.541-15.932,11.575-15.932c9.89,0,10.022,9.256,10.022,16.451v30.178H93.06V58.942 C93.06,42.235,89.455,29.383,69.925,29.383z"></path>{' '}
												</g>{' '}
											</g>{' '}
										</g>
									</svg>
								</a>
							</div>
						</div>
					))}
				</div>

				{/* <div className="creatorscards">
					<div className="row row-cols-1 row-cols-md-3">
						<div className="col mb-4">
							<div className="card" style={{ backgroundImage: `url(${AbhinavVermaImg})` }}>
								<div className="linkedin">
									<div className="info">
										<span className="name">Abhinav Verma</span>
										<span className="role">Founder and CEO</span>
									</div>
									<img src={Linkedin1Img} alt="" style={{ width: '55px' }} />
								</div>
							</div>
						</div>

						<div className="col mb-4">
							<div className="card " style={{ backgroundImage: `url("/yash-vardhan-singh.png")` }}>
								<div className="linkedin">
									<div className="info">
										<span className="name">Yash Vardhan Singh </span>
										<span className="role">Co-founder and MD</span>
									</div>
									<img src="/yash-vardhan-singh.png" alt="" style={{ width: '55px' }} />
								</div>
							</div>
						</div>

						<div className="col mb-4">
							<div className="card " style={{ backgroundImage: `url(${AnkitImg})` }}>
								<div className="linkedin">
									<div className="info">
										<span className="name">Ankit</span>
										<span className="role">AR Head</span>
									</div>
									<img src={Linkedin1Img} alt="" style={{ width: '55px' }} />
								</div>
							</div>
						</div>

						<div className="col mb-4">
							<div className="card " style={{ backgroundImage: `url(${AdityaAnandImg})` }}>
								<div className="linkedin">
									<div className="info">
										<span className="name">Aditya Anand</span>
										<span className="role">Brand success manager</span>
									</div>
									<img src={Linkedin1Img} alt="" style={{ width: '55px' }} />
								</div>
							</div>
						</div>

						<div className="col mb-4">
							<div className="card " style={{ backgroundImage: `url(${RajvardhanRayImg})` }}>
								<div className="linkedin">
									<div className="info">
										<span className="name">Rajvardhan Ray</span>
										<span className="role">UI/UX Designer</span>
									</div>
									<img src={Linkedin1Img} alt="" style={{ width: '55px' }} />
								</div>
							</div>
						</div>

						<div className="col mb-4">
							<div className="card " style={{ backgroundImage: `url(${SugandhMalikImg})` }}>
								<div className="linkedin">
									<div className="info">
										<span className="name">Sugandh Malik</span>
										<span className="role">3D Blender designer</span>
									</div>
									<img src={Linkedin1Img} alt="" style={{ width: '55px' }} />
								</div>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default About;
