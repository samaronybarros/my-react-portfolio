import styled from 'styled-components'
import S from './constants'

export const BreadCrumbsUl = styled.ul`
	list-style: none;
	padding-left: 0;
	color: ${S.colorGrey};
`

export const BreadCrumbsLi = styled.li`
	display: inline-block;
	padding: 0 5px 0 0;
`

export const BreadCrumbsLink = styled.a`
	color: ${S.colorGrey};

	&:hover {
		color: ${S.colorWhite};
	}
`
