import styled, { keyframes } from 'styled-components'
import S from './constants'

const KFProfilePicture = keyframes`
    0% {
        opacity: 0;
        transform: translate(0, 80px);
    }
    100% {
        opacity: 1;
        transform: translate(0, 0);
    }
`

const KFProfileTitle = keyframes`
    0% {
        opacity: 0;
        transform: translate(0, -80px);
    }
    100% {
        opacity: 1;
        transform: translate(0, 0);
    }
`

export const CoverMain = styled.div`
	color: ${S.colorWhite};
	height: 92vh;
`

export const CoverSpan = styled.span`
	color: ${S.colorContrast};
	font-weight: 600;
`

export const CoverDiv = styled.div`
	display: inline-block;
	height: 650px;
	vertical-align: top;

	@media (max-width: 1000px) {
		display: block;
		height: auto;
		vertical-align: top;
	}
`

export const ProfilePicture = styled(CoverDiv)`
    width: 40%;
    text-align: center;

    animation-name: ${KFProfilePicture};
    animation-duration: 2s;

    @media (max-width: 1000px) {
		width: 100%;
		text-align: center;
	}
`

export const ProfilePictureImg = styled.img`
	border-radius: 50%;
	margin-top: 100px;

	@media (max-width: 1000px) {
		border-radius: 50%;
		margin-top: 50px;
		max-width: 80%;
	}
`

export const ProfileTitle = styled(CoverDiv)`
    width: 60%;

    animation-name: ${KFProfileTitle};
    animation-duration: 2s;
    
    @media (max-width: 1000px) {
		width: 100%;
		text-align: center;
	}
`

export const ProfileTitleH1 = styled.h1`
	font-size: 58px;
	margin-top: 200px;
	font-weight: 400;
	text-transform: uppercase;

	@media (max-width: 1000px) {
		font-size: 50px;
		font-weight: 400;
		margin: 50px 20px 0 20px;
	}
`

export const ProfileTitleH2 = styled.h2`
	font-size: 20px;
	margin-top: -30px;
	font-weight: 100;

	@media (max-width: 1000px) {
		margin: 30px 20px 0 20px;
		font-size: 25px;
	}
`
