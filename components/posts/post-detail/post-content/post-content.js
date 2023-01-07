import ReactMarkdown from 'react-markdown';
import { PostHeader } from '../post-header/post-header';
import classes from './post-content.module.css';
import { MarkdownParagraph } from '../../../markdown/markdown-paragraph/markdown-paragraph';
import { MarkdownCode } from '../../../markdown/markdown-code/markdown-code';

export const PostContent = ({ post }) => {
	const imagePath = `/images/posts/${post.slug}/${post.image}`;

	const MarkdownComponents = {
		p: MarkdownParagraph,
		code: MarkdownCode
	};

	return (
		<article className={classes.content}>
			<PostHeader title={post.title} image={imagePath} />
			<ReactMarkdown components={MarkdownComponents}>
				{post.content}
			</ReactMarkdown>
		</article>
	);
};
