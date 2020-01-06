import React, { Component } from 'react'

import { ContactDiv, MainH1, MainH3, MainParagraph } from '../../../styles/Main'
import { SocialImg, SocialLink } from '../../../styles/Contact'

import Navbar from '../../../components/NavBar'
import Footer from '../../../components/Footer'
import Breadcrumbs from '../../../components/Breadcrumbs'
//https://www.iconfinder.com/iconsets/black-white-social-media
import { facebook, linkedin, github, instagram } from '../../../img/social'
import { Wrapper } from '../../../styles/Wrapper'

class CurriculumView extends Component {
	render() {
		return (
			<Wrapper>
				<Navbar />
				<ContactDiv>
					<Breadcrumbs name={'Contact'} />

					<MainH1>Contact</MainH1>

					<MainH3>E-mail:</MainH3>
					<MainParagraph>samarony.barros@gmail.com</MainParagraph>

					<MainH3>Phone:</MainH3>
					<MainParagraph>+49 160 91970573</MainParagraph>

					<MainH3>Social Network:</MainH3>

					<SocialLink href={'https://www.facebook.com/samarony.barros'} target={'_blank'}>
						<SocialImg src={facebook} />
					</SocialLink>
					<SocialLink href={'https://www.linkedin.com/in/sam-barros/'} target={'_blank'}>
						<SocialImg src={linkedin} />
					</SocialLink>
					<SocialLink href={'https://github.com/samaronybarros'} target={'_blank'}>
						<SocialImg src={github} />
					</SocialLink>
					<SocialLink href={'https://www.instagram.com/sam_barros_/'} target={'_blank'}>
						<SocialImg src={instagram} />
					</SocialLink>
				</ContactDiv>
				<Footer />
			</Wrapper>
		)
	}
}

export default CurriculumView
