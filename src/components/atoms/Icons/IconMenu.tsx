import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
	title?: string;
	titleId?: string;
}
export const IconMenu = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={2}
		viewBox="0 0 24 24"
		width="1em"
		height="1em"
		focusable="false"
		aria-hidden="true"
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path d="M3 12h18M3 6h18M3 18h18" />
	</svg>
);
