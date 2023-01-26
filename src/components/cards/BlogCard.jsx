import { Link } from 'react-router-dom';
import styles from '../../styles/Blogs.module.css';

const temp = {
	category: 'Product Update',
	title: 'Augmented Reality (AR) is an interactive experience of a real-world environment where the objects',
	link: 'https://PrashantAmoli.github.io',
	thumbnail: '/blog-thumbnail.svg',
};

export default function BlogCard({ thumbnail = temp.thumbnail, category = temp.category, title = temp.title, link = temp.link }) {
	return (
		<div className={`${styles.blogCard}`}>
			<img src={thumbnail} alt="blog" className={`${styles.blogThumbnail}`} />

			<div className="flex flex-col">
				<h3 className="">Blog Title</h3>

				<p>Augmented reality (AR) is an interactive experience of a real-world environment where the objects</p>

				<Link to={link} className={``}>
					<img src="/blog-arrow.svg" alt="" />
					&nbsp;READ FULL ARTICLE
				</Link>
			</div>
		</div>
	);
}
