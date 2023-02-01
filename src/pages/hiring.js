// import "./Careers.css"
// import Vector1 from '../../images/vector1.png';
// import Vector from '../../images/location-marker.png';

const vector1 = '/images/vector1.png';
const vector = '/images/location-marker.png';

export default function Hiring() {
	return (
		<div>
			<div className="job">
				<div className="jobdetail">
					<span className="jobtitle" id="id1">
						Product Designer
					</span>
					<span className="jobdesc" id="id2">
						We're looking for a mid-level product designer to join our team.
					</span>

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
				<div className="jobapply">
					<span>Apply</span>
				</div>
			</div>
		</div>
	);
}
