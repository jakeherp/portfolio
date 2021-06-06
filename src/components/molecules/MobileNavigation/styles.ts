import styled from 'styled-components';

const StyledMobileNavigation = styled.ul`
	display: flex;

	li {
		width: 2rem;
		margin-left: 1rem;
	}
`;

const Menu = styled.button`
	width: 2rem;
	height: 2rem;
	padding: 0;
	background: transparent;
	border: 0;
	color: ${({ theme }) => theme.text};
	position: absolute;
	z-index: 100;

	&:hover {
		color: ${({ theme }) => theme.headline};
	}
`;

const Overlay = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: -50%;
	left: 0;
	background: ${({ theme }) => theme.body};
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	pointer-events: none;
	transition: all 0.5s ease;
	z-index: 10;

	&.open {
		opacity: 1;
		pointer-events: auto;
		top: 0;
	}
`;

export { Menu, Overlay, StyledMobileNavigation };
