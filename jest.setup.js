/* eslint-disable @typescript-eslint/no-empty-function */
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react';

window.matchMedia =
	window.matchMedia ||
	function () {
		return {
			matches: false,
			addListener: function () {},
			removeListener: function () {},
		};
	};

jest.mock('Atoms/Icon', () => {
	return {
		__esModule: true,
		Icon: () => {
			return <svg />;
		},
	};
});
