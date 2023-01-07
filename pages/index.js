import { Hero } from '../components/home-page/hero/hero';
import { FeaturedPosts } from '../components/home-page/featured-posts/featured-posts';

export const DUMMY_POSTS = [
	{
		slug: 'getting-started-with-nextjs1',
		title: 'Getting Started With NextJS',
		image: 'getting-started-nextjs.png',
		excerpt: 'NextJS is a the React framework for production - it makes building fullstack'
			+ ' React apps and sites a breeze and ships with built-in SSR',
		date: '2023-01-07'
	},
	{
		slug: 'getting-started-with-nextjs2',
		title: 'Getting Started With NextJS',
		image: 'getting-started-nextjs.png',
		excerpt: 'NextJS is a the React framework for production - it makes building fullstack'
			+ ' React apps and sites a breeze and ships with built-in SSR',
		date: '2023-01-07'
	},
	{
		slug: 'getting-started-with-nextjs3',
		title: 'Getting Started With NextJS',
		image: 'getting-started-nextjs.png',
		excerpt: 'NextJS is a the React framework for production - it makes building fullstack'
			+ ' React apps and sites a breeze and ships with built-in SSR',
		date: '2023-01-07'
	},
	{
		slug: 'getting-started-with-nextjs4',
		title: 'Getting Started With NextJS',
		image: 'getting-started-nextjs.png',
		excerpt: 'NextJS is a the React framework for production - it makes building fullstack'
			+ ' React apps and sites a breeze and ships with built-in SSR',
		date: '2023-01-07'
	}
];

const HomePage = () => (
	<>
		<Hero />
		<FeaturedPosts posts={DUMMY_POSTS} />
	</>
);

export default HomePage;
