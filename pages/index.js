import Head from 'next/head';
import { Hero } from '../components/home-page/hero/hero';
import { FeaturedPosts } from '../components/home-page/featured-posts/featured-posts';
import { getFeaturedPosts } from '../lib/posts-util';

const HomePage = ({ posts }) => (
	<>
		<Head>
			<title>Frontend Blog</title>
			<meta name="description" content="I post about programming and web development" />
		</Head>
		<Hero />
		<FeaturedPosts posts={posts} />
	</>
);

export function getStaticProps() {
	const featuredPosts = getFeaturedPosts();

	return { props: { posts: featuredPosts } };
}

export default HomePage;
