import * as path from 'path';
import * as fs from 'fs';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getPostsFiles = () => fs.readdirSync(postsDirectory);

export const getPostData = (postIdentifier) => {
	const postSlug = postIdentifier.replace(/\.md$/, ''); // remove the file extension
	const filePath = path.join(postsDirectory, `${postSlug}.md`);
	const fileContent = fs.readFileSync(filePath, 'utf-8');
	const { data, content } = matter(fileContent);

	return {
		slug: postSlug,
		...data,
		content
	};
};

export const getAllPosts = () => {
	const postFiles = getPostsFiles();

	const allPosts = postFiles.map((post) => getPostData(post));

	return allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);
};

export const getFeaturedPosts = () => {
	const allPosts = getAllPosts();

	return allPosts.filter((post) => post.isFeatured);
};
