import { PostContent } from '../../components/posts/post-detail/post-content/post-content';
import { getPostData, getPostsFiles } from '../../lib/posts-util';

const PostDetailPage = ({ post }) => (
	<PostContent post={post} />
);

export function getStaticProps(context) {
	const { params: { slug } } = context;
	const postData = getPostData(slug);

	return {
		props: { post: postData },
		revalidate: 600
	};
}

export function getStaticPaths() {
	const postsFiles = getPostsFiles();
	const slugs = postsFiles.map((postFile) => postFile.replace(/\.md$/, ''));

	return {
		paths: slugs.map((slug) => ({ params: { slug } })),
		fallback: 'blocking'
	};
}

export default PostDetailPage;
