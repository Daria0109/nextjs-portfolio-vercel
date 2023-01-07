import classes from './all-posts.module.css';
import { PostsGrid } from '../posts-grid/posts-grid';

export const AllPosts = ({ posts }) => (
	<section className={classes.posts}>
		<h1>All Posts</h1>
		<PostsGrid posts={posts} />
	</section>
);
