import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const MarkdownCode = ({ className, children }) => {
	const language = className.split('-')[1];

	return (
		<SyntaxHighlighter
			style={atomDark}
			language={language}
		>
			{children}
		</SyntaxHighlighter>
	);
};
