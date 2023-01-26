import ScheduleForm from '../cards/ScheduleForm';
import Container from 'react-bootstrap/Container';

function ScheduleDemo() {
	return (
		<section className="bgMain">
			<Container fluid="xl" className="justify-content-md-center">
				<ScheduleForm />
			</Container>
		</section>
	);
}

export default ScheduleDemo;
