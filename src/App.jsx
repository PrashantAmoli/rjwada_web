// import Navbar from './components/layout/Navbar';
import { Navbar } from './components';
import Footer from './components/layout/Footer';
import NotFound from './components/pages/NotFound';
import { Route, Routes, createBrowserRouter, createRoutesFromElements, Outlet, RouterProvider } from 'react-router-dom';
import { About, Bigcommerce, Blogs, Careers, Features, Home, ScheduleDemo, Services, Stepin } from './components';

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

const routesArray = [
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '',
				element: <Home />,
			},
			{
				path: 'blogs',
				element: <Blogs />,
			},
			{
				path: 'bigcommerce',
				element: <Bigcommerce />,
			},
			{
				path: 'careers',
				element: <Careers />,
			},
			{
				path: 'features',
				element: <Features />,
			},
			{
				path: 'scheduleDemo',
				element: <ScheduleDemo />,
			},
			{
				path: 'services',
				element: <Services />,
			},
			{
				path: 'stepin',
				element: <Stepin />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
];
export default function App() {
	// const router = createBrowserRouter(
	// 	createRoutesFromElements(
	// 		<Route path="/" element={<Root />}>
	// 			<Route index element={<Home />} />
	// 			<Route path="/about" element={<About />} />
	// 			<Route path="/bigcommerce" element={<Bigcommerce />} />
	// 			<Route path="/blogs" element={<Blogs />} />
	// 			<Route path="/careers" element={<Careers />} />
	// 			<Route path="/features" element={<Features />} />
	// 			<Route path="/scheduleDemo" element={<ScheduleDemo />} />
	// 			<Route path="/services" element={<Services />} />
	// 			<Route path="/stepin" element={<Stepin />} />
	// 			<Route path="*" element={<NotFound />} />
	// 		</Route>
	// 	)
	// );

	const router = createBrowserRouter(routesArray);

	return (
		<div className="App">
			<RouterProvider router={router} />
			{/* <Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/bigcommerce" element={<Bigcommerce />} />
				<Route path="/blogs" element={<Blogs />} />
				<Route path="/careers" element={<Careers />} />
				<Route path="/features" element={<Features />} />
				<Route path="/scheduleDemo" element={<ScheduleDemo />} />
				<Route path="/services" element={<Services />} />
				<Route path="/stepin" element={<Stepin />} />
				<Route path="*" element={<NotFound />} />
			<Footer />
			</Routes> */}
		</div>
	);
}
