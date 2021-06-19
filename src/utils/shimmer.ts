const shimmerSvg = (width: number, height: number) => `
  <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="rgba(100, 100, 100, 0.2)" offset="20%" />
        <stop stop-color="rgba(100, 100, 100, 0.5)" offset="50%" />
        <stop stop-color="rgba(100, 100, 100, 0.2)" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="rgba(100, 100, 100, 0.2)" />
    <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${width}" to="${width}" dur="1s" repeatCount="indefinite"  />
  </svg>`;

const toBase64 = (str: string) =>
	typeof window === 'undefined'
		? Buffer.from(str).toString('base64')
		: window.btoa(str);

export const shimmer = (width: number, height: number) => {
	return `data:image/svg+xml;base64,${toBase64(shimmerSvg(width, height))}`;
};
