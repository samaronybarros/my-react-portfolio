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

	@media (max-width: 1000px) {
		padding: 10px 5% 40px 5%;
		text-align: center;
	}
`

export const ContactDiv = styled(MainDiv)`
	flex: 1;
	align-items: center;
	justify-content: center;
`

export const MainLine = styled.hr``

export const CVPicture = styled.img`
	float: left;
	padding-right: 20px;
	width: 200px;

	@media (max-width: 1000px) {
		float: none;
		max-width: 80%;
		margin: 0;
	}
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
	color: ${S.colorContrast};
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

	@media (max-width: 1000px) {
		line-height: 30px;
		text-align: center;
	}
`

export const MainQuotation = styled.p`
	color: ${S.colorWhite};
	font-size: 18px;
	text-align: justify;
	font-weight: 100;
	line-height: 24px;
	font-style: italic;
	border-left: 5px solid ${S.colorWhite};
	padding-left: 10px;

	@media (max-width: 1000px) {
		line-height: 30px;
		text-align: center;
	}
`

export const MainUl = styled.ul`
	color: ${S.colorWhite};
	font-size: 18px;
	text-align: justify;
	font-weight: 100;
	line-height: 24px;
`

export const MainLi = styled.li``

export const MainBlogTitle = styled.h1`
	color: ${S.colorWhite};
	font-size: 32px;
	text-align: left;
	font-weight: 800;
	line-height: 24px;
`

export const MainBlogSubTitle = styled(MainBlogTitle)`
	font-size: 26px;
`

export const MainBlogSubSubTitle = styled(MainBlogTitle)`
	font-size: 22px;
`

export const MainCompanyCollapse = styled.div``

export const MainCompany = styled.div`
	padding: 10px 0;
	/* TODO: Think better abou this
	box-shadow: 1px 2px 4px rgba(255, 255, 255, .5);
	margin: 25px 0;
	padding: 10px; */

	@media (max-width: 1000px) {
		display: block;
		max-width: 100%;
	}
`

export const MainDivInformation = styled.div`
	display: inline-block;
	height: auto;
	vertical-align: top;

	@media (max-width: 1000px) {
		display: block;
		max-width: 100%;
	}
`

export const MainCurriculumInformation = styled.div`
	width: 100%;
	height: auto;

	@media (max-width: 1000px) {
		display: block;
		max-width: 100%;
	}
`

export const CompanyDivPicture = styled(MainDivInformation)`
	width: 20%;
	text-align: left;

	@media (max-width: 1000px) {
		height: auto;
		width: 100%;
		text-align: center;
	}
`

export const CompanyImg = styled.img`
	width: 125px;
	max-width: 80%;
	border-radius: 50%;
`

export const CompanyDivRole = styled(MainDivInformation)`
	width: 80%;
	text-align: left;
	line-height: 10px;

	@media (max-width: 1000px) {
		line-height: 10px;
		text-align: center;
		width: 100%;
		height: auto;
		padding: 2.5% 0;
	}
`

export const MainRole = styled.p`
	color: ${S.colorWhite};
	font-size: 18px;
	text-align: justify;
	font-weight: 400;

	@media (max-width: 1000px) {
		text-align: center;
	}
`

export const MainCompanyName = styled.p`
	color: ${S.colorWhite};
	font-size: 16px;
	text-align: justify;
	font-weight: 200;

	@media (max-width: 1000px) {
		text-align: center;
	}
`

export const MainCompanyDate = styled.p`
	color: ${S.colorGrey};
	font-size: 13px;
	text-align: justify;
	font-weight: 200;

	@media (max-width: 1000px) {
		text-align: center;
	}
`

export const MainBlogPictureDivCenter = styled.div`text-align: center;`

export const MainBlogPicture = styled.img`
	margin: 10px 0;
	height: ${(props) => props.size};
	width: ${(props) => props.size};
`

export const MainCurriculumDescription = styled.div`
	width: 100%;
	max-width: 100%;
`

export const MainDescription = styled.p`
	color: ${S.colorContrast};
	font-size: 12px;
	text-align: left;
	font-weight: 400;
	text-transform: uppercase;
	margin-bottom: -10px;
	@media (max-width: 1000px) {
		text-align: center;
	}
`

export const MainTextDescription = styled.p`
	color: ${S.colorWhite};
	font-size: 18px;
	text-align: justify;
	font-weight: 100;
	line-height: 24px;

	@media (max-width: 1000px) {
		text-align: center;
	}
`

export const MainButton = styled.button`font-size: 14px;`

export const Miniature = styled.div`
	height: 350px;
	width: 350px;
	display: inline-block;
	margin-right: 15px;
	margin-bottom: 15px;
	background-size: 350px;
	overflow: hidden;
	background-image: url('${(props) => props.img}');
	background-position: center;
	background-repeat: no-repeat;
	background-color: ${S.colorWhite};
`

export const MiniatureLink = styled.a`text-decoration: none;`

export const BlogLink = styled.a`
	color: ${S.colorWhite};
	font-weight: 600;

	&:hover {
		color: ${S.colorContrast};
	}
`

export const BlackBox = styled.div`
	height: 100%;
	width: 100%;
	background-color: #000000;
	opacity: 0;
	padding-top: 130px;
	transition: 1s;

	&:hover {
		opacity: 0.85;
		transition: 0.5s;
	}
`

export const BlackBoxText = styled.div`text-align: center;`

export const BlackBoxTextH1 = styled.h1`
	font-size: 16px;
	color: ${S.colorContrast};
	text-transform: uppercase;
	margin-top: 0;
`

export const BlackBoxTextH2 = styled.h2`
	text-transform: none;
	font-weight: 100;
	margin-top: 0;
	color: ${S.colorWhite};
`

export const MainSimpleLink = styled.a`
	color: ${S.colorWhite};
	font-weight: 800;

	&:hover {
		color: ${S.colorContrast};
	}
`
