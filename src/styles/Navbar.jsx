import styled, { keyframes } from 'styled-components'
import S from './constants'

const KFNavBar = keyframes`
    0% {
        opacity: 0;
        transform: translate(550px, 0);
    }
    100% {
        opacity: 1;
        transform: translate(0, 0);
    }
`

export const NavBarDiv = styled.div`
	background-color: ${S.colorBackground};
	color: ${S.colorWhite};
	height: 50px;

	animation-name: ${KFNavBar};
	animation-duration: 2s;

	@media (max-width: 1000px) {
		height: ${(props) => (props.show ? 'auto' : null)};
	}
`

export const NavBarUl = styled.ul`
	margin-top: 0;
	list-style: none;
	padding-left: 0;
	text-align: right;
	height: 50px;

	@media (max-width: 1000px) {
		height: ${(props) => (props.show ? 'auto' : null)};
		text-align: ${(props) => (props.show ? 'center' : null)};
		padding: ${(props) => (props.show ? '0 15%' : null)};
	}
`

export const NavBarLi = styled.li`
	display: inline-block;
	padding: 0 30px;
	line-height: 50px;
	font-size: 16px;
	font-weight: 100;

	@media (max-width: 1000px) {
		display: ${(props) => (props.show ? 'block' : 'none')};
		border-bottom: ${(props) => (props.show ? 'solid grey 1px' : null)};
		width: ${(props) => (props.show ? '100%' : null)};
		padding: ${(props) => (props.show ? '0' : null)};
	}
`

export const NavBarLink = styled.a`
	color: ${S.colorWhite};
	text-decoration: none;

	&:hover {
		color: ${S.colorContrast};
	}
`

export const NavBar3LineMenu = styled.li`
	display: none;
	padding: 0 30px;
	line-height: 50px;
	font-size: 26px;
	font-weight: 200;

	&:hover {
		color: ${S.colorContrast};
		cursor: pointer;
	}

	@media (max-width: 1000px) {
		display: inline-block;
	}
`
