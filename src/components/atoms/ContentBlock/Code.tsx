'use client';

import classNames from 'classnames';
import Highlight, { Language, defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import type { PropsWithChildren } from 'react';

interface CodeBlockProps {
	language: Language;
	code: string;
}

const CodeBlock = ({ code, language }: PropsWithChildren<CodeBlockProps>) => {
	return (
		<Highlight {...defaultProps} theme={theme} code={code} language={language}>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre
					className={classNames(
						'my-4 overflow-scroll rounded-lg p-8',
						className
					)}
					style={style}
				>
					{tokens.map((line, i) => (
						<div {...getLineProps({ line, key: i })} key={`token-${i}`}>
							{line.map((token, key) => (
								<span {...getTokenProps({ token, key })} key={key} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	);
};

export default CodeBlock;
