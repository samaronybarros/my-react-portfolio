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
`

export const MainCompany = styled.div`
	padding: 10px 0;
	max-width: 80%;
`

export const MainDivInformation = styled.div`
	display: inline-block;
	height: 125px;
	vertical-align: top;
`

export const MainCurriculumInformation = styled.div`width: 100%;`

export const CompanyDivPicture = styled(MainDivInformation)`
	width: 20%;
	text-align: left;
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
`

export const MainRole = styled.p`
	color: ${S.colorWhite};
	font-size: 18px;
	text-align: justify;
	font-weight: 400;
`

export const MainCompanyName = styled.p`
	color: ${S.colorWhite};
	font-size: 16px;
	text-align: justify;
	font-weight: 200;
`

export const MainCompanyDate = styled.p`
	color: ${S.colorGrey};
	font-size: 13px;
	text-align: justify;
	font-weight: 200;
`

export const MainCurriculumDescription = styled.div`width: 100%;`

export const MainDescription = styled.p`
	color: ${S.colorContrast};
	font-size: 12px;
	text-align: left;
	font-weight: 400;
	text-transform: uppercase;
	margin-bottom: -10px;
`

export const MainTextDescription = styled.p`
	color: ${S.colorWhite};
	font-size: 14px;
	text-align: justify;
	font-weight: 100;
	line-height: 24px;
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
