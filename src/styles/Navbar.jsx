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
`

export const NavBarUl = styled.ul`
    margin-top: 0;
    list-style: none;
    padding-left: 0;
    text-align: right;
    height: 50px;
`
export const NavBarLi = styled.ul`
    display: inline-block;
    padding: 0 30px;
    line-height: 50px;
    font-size: 16px;
    font-weight: 100;
`

export const NavBarLink = styled.a`
    color: ${S.colorWhite};
    text-decoration: none;

    &:hover{
        color: ${S.colorOrange};
    } 
`