import React, { Component } from 'react'
import { MainDiv, MainH1, MainH3, MainParagraph } from '../styles/Main'
import { SocialImg, SocialLink } from '../styles/Contact'
import Breadcrumbs from './Breadcrumbs'

import facebook from '../img/facebook.svg'
import linkedin from '../img/linkedin.svg'
import github from '../img/github.svg'

class Contact extends Component {
	render() {
		return (
			<MainDiv>
				<Breadcrumbs name={'Contact'} />

				<MainH1>Contato</MainH1>

				<MainH3>E-mail:</MainH3>
				<MainParagraph>Coloque aqui seu e-mail</MainParagraph>

				<MainH3>Telefone:</MainH3>
				<MainParagraph>Coloque aqui seu telefone</MainParagraph>

				<MainH3>Redes Sociais:</MainH3>
				<SocialLink href={'#'} target={'_blank'}>
					<SocialImg src={facebook} />
				</SocialLink>
				<SocialLink href={'#'} target={'_blank'}>
					<SocialImg src={linkedin} />
				</SocialLink>
				<SocialLink href={'#'} target={'_blank'}>
					<SocialImg src={github} />
				</SocialLink>
			</MainDiv>
		)
	}
}

export default Contact
