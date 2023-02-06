import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
export const IconClose = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		viewBox="0 0 100 100"
		xmlns="http://www.w3.org/2000/svg"
		fillRule="evenodd"
		clipRule="evenodd"
		strokeLinecap="round"
		strokeLinejoin="round"
		width="1em"
		height="1em"
		focusable="false"
		aria-hidden="true"
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d="m16.655 16.767 66.69 66.466m-66.69 0 66.69-66.466"
			fill="none"
			stroke="currentColor"
			strokeWidth={9.42}
		/>
	</svg>
);
