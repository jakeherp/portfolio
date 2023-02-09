/* eslint-disable @typescript-eslint/no-explicit-any */
interface Children {
	_key: string;
	_type: string;
	marks: any[];
	text?: string;
	chilren?: Children[];
}

export interface BlockContent {
	_key: string;
	_type: 'block';
	children: Children[];
	markDefs: any[];
	style: string;
}
