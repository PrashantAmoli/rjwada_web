import styles from '../../styles/Stepin.module.css';
// Bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function Stepin() {
	return (
		<Container className={`d-flex flex-column gap-8 justify-content-center ${styles.pageContainer}`}>
			<header className="text-center d-inline-flex justify-content-center">
				<p>Interactive&nbsp;</p>
				<p className={`${styles.textBlue}`}>AR&nbsp;</p> <p>&&nbsp;</p> <p className={`${styles.textBlue}`}>3D&nbsp;</p> <p>Models&nbsp;</p>
			</header>

			<div className={`justify-content-md-center ${styles.arContainer}`}>
				<canvas></canvas>
				<div>
					<h3 className="text-center">Comming soon...</h3>
				</div>
			</div>

			<div className={`${styles.btnContainer}`}>
				<Button variant="primary">Bags</Button>
				<Button variant="primary">Sofa</Button>
				<Button variant="primary">Shoes</Button>
			</div>
		</Container>
	);
}
