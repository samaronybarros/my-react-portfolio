import styled, { keyframes } from 'styled-components'
import S from './constants'

const KFMain = keyframes`
    0% {
        opacity: 0;
        transform: translate(-20px, 0);
    }
    100% {
        opacity: 1;
        transform: translate(0, 0);
    }
`

export const MainDiv = styled.div`
	padding: 80px 180px 80px 100px;

	animation-name: ${KFMain};
	animation-duration: 2s;
`

export const MainLine = styled.hr``

export const CVPicture = styled.img`
	float: left;
	padding-right: 20px;
	width: 200px;
`

export const MainH1 = styled.h1`
	color: ${S.colorWhite};
	font-weight: normal;
`

export const MainH2 = styled.h2`
	color: ${S.colorWhite};
	font-size: 12px;
	text-transform: uppercase;
	font-weight: 400px;
`

export const MainH3 = styled.h3`
	color: ${S.colorOrange};
	font-size: 12px;
	text-transform: uppercase;
	font-weight: normal;
`
export const MainParagraph = styled.p`
	color: ${S.colorWhite};
	font-size: 18px;
	text-align: justify;
	font-weight: 100;
	line-height: 24px;
`
