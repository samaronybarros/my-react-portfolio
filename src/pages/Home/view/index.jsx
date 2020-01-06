import React, { Component } from 'react'
import Navbar from '../../../components/NavBar'
import Footer from '../../../components/Footer'

import {
	CoverMain,
	CoverSpan,
	ProfilePicture,
	ProfilePictureImg,
	ProfileTitle,
	ProfileTitleH1,
	ProfileTitleH2
} from '../../../styles/Cover'
import { Wrapper } from '../../../styles/Wrapper'
import picture from '../../../img/sam-picture.jpg'

class HomeView extends Component {
	render() {
		return (
			<Wrapper>
				<Navbar />
				<CoverMain>
					<ProfilePicture>
						<ProfilePictureImg src={picture} alt="Foto de Sam Barros" />
					</ProfilePicture>
					<ProfileTitle>
						<ProfileTitleH1>
							Sam <CoverSpan>Barros</CoverSpan>
						</ProfileTitleH1>
						<ProfileTitleH2>Full Stack Engineer - Backend Engineer - Software Architect</ProfileTitleH2>
					</ProfileTitle>
				</CoverMain>
				<Footer />
			</Wrapper>
		)
	}
}

export default HomeView
