import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import NotFound from './components/pages/NotFound';
import { Route, createBrowserRouter, createRoutesFromElements, Outlet, RouterProvider } from 'react-router-dom';
import { About, Bigcommerce, Blogs, Careers, Features, Home, ScheduleDemo, Services, Stepin } from './components';

export default function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Root />}>
				<Route index element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/bigcommerce" element={<Bigcommerce />} />
				<Route path="/blogs" element={<Blogs />} />
				<Route path="/careers" element={<Careers />} />
				<Route path="/features" element={<Features />} />
				<Route path="/scheduleDemo" element={<ScheduleDemo />} />
				<Route path="/services" element={<Services />} />
				<Route path="/stepin" element={<Stepin />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		)
	);

	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

const Root = () => {
	return (
		<>
			<Navbar />

			<main>
				<Outlet />
			</main>

			<Footer />
		</>
	);
};
