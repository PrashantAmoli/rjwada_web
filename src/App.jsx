import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { Routes, Route } from 'react-router-dom';
import { About, Bigcommerce, Blogs, Careers, Features, Home, ScheduleDemo, Services, Shopify, Stepin } from './components';

function App() {
	return (
		<div className="App">
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/bigcommerce" element={<Bigcommerce />} />
				<Route path="/blogs" element={<Blogs />} />
				<Route path="/careers" element={<Careers />} />
				<Route path="/features" element={<Features />} />
				<Route path="/scheduleDemo" element={<ScheduleDemo />} />
				<Route path="/services" element={<Services />} />
				<Route path="/shopify" element={<Shopify />} />
				<Route path="/stepin" element={<Stepin />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
