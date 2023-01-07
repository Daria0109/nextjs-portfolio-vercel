import { PostItem } from '../post-item/post-item';
import classes from './posts-grid.module.css';

export const PostsGrid = ({ posts }) => (
	<ul className={classes.grid}>
		{posts.map((post) => (
			<PostItem
				key={post.slug}
				title={post.title}
				image={post.image}
				excerpt={post.excerpt}
				date={post.date}
				slug={post.slug}
			/>
		))}
	</ul>
);
