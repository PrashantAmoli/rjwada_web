import Link from 'next/link';
import styles from '@/styles/Blogs.module.css';

const temp = {
	topic: 'Product Update',
	title: 'Augmented Reality (AR) is an interactive experience of a real-world environment where the objects',
	link: 'https://PrashantAmoli.github.io',
	thumbnail: '/blog-thumbnail.svg',
};

export default function BlogCard({ thumbnail = temp.thumbnail, topic = temp.topic, title = temp.title, link = temp.link }) {
	return (
		<div className={`${styles.blogCard}`}>
			<img src={thumbnail} alt="blog" className={`${styles.blogThumbnail}`} />

			<div className="flex flex-col">
				<h3 className={`${styles.blogTopic}`}>{topic}</h3>

				<p className={`${styles.blogTitle}`}>{title}</p>

				<Link href={`${link}`} className={`${styles.blogLink}`}>
					<img src="/blog-arrow.svg" alt="" />
					&nbsp;READ FULL ARTICLE
				</Link>
			</div>
		</div>
	);
}
