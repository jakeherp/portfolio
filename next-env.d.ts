/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.svg' {
	const content: any;
	export default content;
}
