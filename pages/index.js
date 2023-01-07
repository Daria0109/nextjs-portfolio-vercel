import { Hero } from '../components/home-page/hero/hero';
import { FeaturedPosts } from '../components/home-page/featured-posts/featured-posts';
import { getFeaturedPosts } from '../lib/posts-util';

const HomePage = ({ posts }) => (
	<>
		<Hero />
		<FeaturedPosts posts={posts} />
	</>
);

export function getStaticProps() {
	const featuredPosts = getFeaturedPosts();

	return { props: { posts: featuredPosts } };
}

export default HomePage;
