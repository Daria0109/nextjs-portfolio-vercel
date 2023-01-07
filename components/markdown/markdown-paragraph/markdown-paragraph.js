import Image from 'next/image';
import classes from '../../posts/post-detail/post-content/post-content.module.css';

export const MarkdownParagraph = ({ node, children }) => {
	if (node.children[0].tagName === 'img') {
		const image = node.children[0];

		return (
			<div className={classes.image}>
				<Image
					src={`/images/posts/${image.properties.src}`}
					alt={image.properties.alt}
					width={600}
					height={300}
				/>
			</div>
		);
	}

	return <p>{children}</p>;
};
