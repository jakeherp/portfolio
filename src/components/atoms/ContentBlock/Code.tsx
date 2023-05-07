'use client';

import classNames from 'classnames';
import { Highlight, themes } from 'prism-react-renderer';
import type { PropsWithChildren } from 'react';

interface CodeBlockProps {
	language: string;
	code: string;
}

const CodeBlock = ({ code, language }: PropsWithChildren<CodeBlockProps>) => {
	return (
		<Highlight theme={themes.nightOwl} code={code} language={language}>
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
