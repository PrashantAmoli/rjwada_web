import { useState, useEffect } from 'react';
import styles from '../../styles/Blogs.module.css';
import BlogCard from '../cards/BlogCard';
// Bootstrap
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const topics = ['All', 'Product Update', 'Augmented Reality', 'Technology', 'Expert Opinion'];

function Blogs() {
	const [activeTopic, setActiveTopic] = useState(0);
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		const fetchBlogs = async () => {
			const res = await fetch('http://localhost:3001/blogs');
			const data = await res.json();
			setBlogs(data);
		};

		fetchBlogs();
	}, []);

	return (
		<Container fluid className={`${styles.pageContainer}`}>
			<header className={`${styles.header}`}>
				<h1 className="">BLOG</h1>

				<div className={`${styles.tabbar}`}>
					{topics.map((topic, index) => (
						<button key={index} className={`${styles.topicBtn} ${index === 0 ? styles.active : ''}`}>
							{topic}
						</button>
					))}
				</div>
			</header>

			<div className={`${styles.mainArticle}`}>
				<img src="/blog-article.svg" alt="" />

				<div className={`${styles.mainArticleBody}`}>
					<h2>Why AR clothing try-on is nearly here?</h2>

					<p>The ability to try on clothes digitally has been a long-term goal that tech companies of all sizes are close to reaching. Here's why.</p>

					<Link to={'/scheduleDemo'} className={``}>
						<img src="/blog-arrow.svg" alt="" />
						&nbsp;READ FULL ARTICLE
					</Link>
				</div>
			</div>

			<div className={`${styles.blogsGrid}`}>
				{blogs.map(blog => (
					<BlogCard key={blog.id} {...blog} />
				))}
			</div>
		</Container>
	);
}

export default Blogs;
