import { AllPosts } from '../../components/posts/all-posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';

const AllPostsPage = ({ posts }) => (
	<AllPosts posts={posts} />
);

export function getStaticProps() {
	const allPosts = getAllPosts();

	return { props: { posts: allPosts } };
}

export default AllPostsPage;
