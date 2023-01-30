import { useState, useEffect } from 'react';
import styles from '../../styles/Blogs.module.css';
import BlogCard from '../cards/BlogCard';
// Bootstrap
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap';

const topics = [
	'All',
	'Product Update',
	'Augmented Reality',
	'Technology',
	'Expert Opinion',
	'Product Update',
	'Augmented Reality',
	'Technology',
	'Expert Opinion',
	'Product Update',
	'Augmented Reality',
	'Technology',
	'Expert Opinion',
];

function Blogs() {
	const [activeTopic, setActiveTopic] = useState(0);
	const [blogs, setBlogs] = useState([]);

	// useEffect(() => {
	// 	const fetchBlogs = async () => {
	// 		const res = await fetch('http://localhost:3001/blogs');
	// 		const data = await res.json();
	// 		setBlogs(data);
	// 	};

	// 	fetchBlogs();
	// }, []);

	return (
		<Container fluid className={`${styles.pageContainer}`}>
			<header className={`${styles.header}`}>
				<h1 className="">BLOG</h1>

				<div className={`${styles.tabbar}`}>
					{topics.map((topic, index) => (
						<button key={index} className={`${styles.topicBtn} ${index === activeTopic ? styles.selected : ''}`}>
							{topic}
						</button>
					))}
				</div>
			</header>

			<Container fluid="lg" className={`${styles.mainArticleContainer}`}>
				<Row className={`${styles.mainArticle}`}>
					<Col sm="4" md={5} lg={5} className={`${styles.mainArticleImage}`}>
						<img src="/blog-article.svg" alt="" />
					</Col>

					<Col sm="8" md={7} lg={7} className={`${styles.mainArticleBody}`}>
						<h2>Why AR clothing try-on is nearly here?</h2>

						<p>
							The ability to try on clothes digitally has been a long-term goal that tech companies of all sizes are close to reaching. Here's why.
						</p>

						<Link to={'/scheduleDemo'} className={``}>
							<img src="/blog-arrow.svg" alt="" />
							&nbsp;READ FULL ARTICLE
						</Link>
					</Col>
				</Row>
			</Container>

			<Container fluid="xl" className={`${styles.blogsGrid}`}>
				{/* {blogs.map((blog, index) => (
					<BlogCard key={index} {...blog} />
				))} */}
				<Blogs />
				<Blogs />
				<Blogs />
				<Blogs />
				<Blogs />
				<Blogs />
			</Container>

			{/* <hr />
			<hr />
			<hr /> */}

			{/* <Container fluid="lg" className="align-items-center justify-content-center">
				<Row className="d-flex justify-content-center">
					<Col sm="12" md="6" lg="6" xl="4" xxl="4" className="">
						<BlogCard />
					</Col>
					<Col sm="12" md="6" lg="6" xl="4" xxl="4" className="">
						<BlogCard />
					</Col>
					<Col sm="12" md="6" lg="6" xl="4" xxl="4" className="">
						<BlogCard />
					</Col>
					<Col sm="12" md="6" lg="6" xl="4" xxl="4" className="">
						<BlogCard />
					</Col>
					<Col sm="12" md="6" lg="6" xl="4" xxl="4" className="">
						<BlogCard />
					</Col>
				</Row>
			</Container> */}

			<Button variant="outline-primary" className={`${styles.loadMoreBtn}`}>
				<Link to="/stepin">Load More</Link>
			</Button>
		</Container>
	);
}

export default Blogs;
