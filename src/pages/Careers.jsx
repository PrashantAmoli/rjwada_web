import { Container } from 'react-bootstrap';

// import Vector1 from "../../images/vector1.png";
// import Vector from "../../images/location-marker.png";

const Vector1 = '/images/vector1.png';
const Vector = '/images/location-marker.png';

// import '../../styles/Careers.css';

const Careers = () => {
	return (
		<div className="career-page">
			<Container fluid>
				<div className="hiringbtn">
					<button onclick="/">We're hiring!</button>
				</div>
				<div className="career-text1">
					<span>
						Be part of our <span>Mission</span>{' '}
					</span>
				</div>
				<div className="career-text2">
					<span>
						We're looking for passionate people to join us on our mission. We value flat hierarchies, clear communication, and full ownership and
						responsibility.
					</span>
				</div>

				<div className="buttons">
					<button>View all</button>
					<button>Operations</button>
					<button>Development</button>
					<button>Marketing</button>
					<button>Management</button>
					<button>Finance</button>
					<button>Customer Service</button>
				</div>

				<div className="hrline"></div>

				<div className="jobs">
					<div className="job">
						<div className="jobdetail">
							<h2 className="jobtitle" id="id1">
								Product Designer
							</h2>
							<span className="jobdesc" id="id2">
								We're looking for a mid-level product designer to join our team.
							</span>

							<div className="container-fluid ">
								<div className=" row ">
									<div className=" col-md-6 mb-md-0 mb-2">
										<div className="jobdetailbuttons">
											<button>
												{' '}
												<img src={Vector} alt="" style={{ width: '24px' }} /> 100% remote
											</button>
											<button>
												{' '}
												<img src={Vector1} alt="" style={{ width: '24px' }} /> Full time
											</button>
										</div>
									</div>

									<div className="col-md-6 mb-md-0 mb-2">
										<div className="jobapply">
											<div className="jobapply">
												<span>Apply Now</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="hrinnerline"></div>

					<div className="job">
						<div className="jobdetail">
							<span className="jobtitle" id="id3">
								Computer Vision Engineer
							</span>
							<span className="jobdesc" id="id4">
								We`re looking for experience Machine Learning with Computer Vision Engineer to join our team.
							</span>

							<div className="container-fluid ">
								<div className=" row ">
									<div className=" col-md-6 mb-md-0 mb-2">
										<div className="jobdetailbuttons">
											<button>
												{' '}
												<img src={Vector} alt="" style={{ width: '24px' }} /> 100% remote
											</button>
											<button>
												{' '}
												<img src={Vector1} alt="" style={{ width: '24px' }} /> Full time
											</button>
										</div>
									</div>

									<div className="col-md-6 mb-md-0 mb-2">
										<div className="jobapply">
											<div className="jobapply">
												<span>Apply Now</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="hrinnerline"></div>

					<div className="job">
						<div className="jobdetail">
							<span className="jobtitle" id="id3">
								Augmented Reality Developer
							</span>
							<span className="jobdesc" id="id4">
								We`re looking for a Augmented Reality Designer and Creator to join our team.
							</span>

							<div className="container-fluid ">
								<div className=" row ">
									<div className=" col-md-6 mb-md-0 mb-2">
										<div className="jobdetailbuttons">
											<button>
												{' '}
												<img src={Vector} alt="" style={{ width: '24px' }} /> 100% remote
											</button>
											<button>
												{' '}
												<img src={Vector1} alt="" style={{ width: '24px' }} /> Full time
											</button>
										</div>
									</div>

									<div className="col-md-6 mb-md-0 mb-2">
										<div className="jobapply">
											<div className="jobapply">
												<span>Apply Now</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
			</Container>
		</div>
	);
};

export default Careers;
