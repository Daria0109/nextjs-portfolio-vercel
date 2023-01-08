import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';

SyntaxHighlighter.registerLanguage('js', js);

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
