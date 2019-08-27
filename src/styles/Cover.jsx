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
`

export const CoverSpan = styled.span`
    color: ${S.colorContrast};
    font-weight: 600;
`

export const CoverDiv = styled.div`
    display: inline-block;
    height: 650px;
    vertical-align: top;
`

export const ProfilePicture = styled(CoverDiv)`
    width: 40%;
    text-align: center;

    animation-name: ${KFProfilePicture};
    animation-duration: 2s;
`

export const ProfilePictureImg = styled.img`
    border-radius: 50%;
    margin-top: 100px;
`

export const ProfileTitle = styled(CoverDiv)`
    width: 60%;

    animation-name: ${KFProfileTitle};
    animation-duration: 2s;
`

export const ProfileTitleH1 = styled.h1`
    font-size: 58px;
    margin-top: 200px;
    font-weight: 400;
    text-transform: uppercase;
`

export const ProfileTitleH2 = styled.h2`
    font-size: 20px;
    margin-top: -30px;
    font-weight: 100;
`

