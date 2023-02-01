import '@/styles/globals.css';
import { Navbar, Footer } from '@/components';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
