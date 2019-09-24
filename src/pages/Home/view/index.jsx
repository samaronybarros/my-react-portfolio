import React, { Component } from 'react'
import Navbar from '../../../components/NavBar'

import {
	CoverMain,
	CoverSpan,
	ProfilePicture,
	ProfilePictureImg,
	ProfileTitle,
	ProfileTitleH1,
	ProfileTitleH2,
} from '../../../styles/Cover'
import picture from '../../../img/sam-picture.jpg'

class HomeView extends Component {
	render() {
		return (
			<React.Fragment>
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
			</React.Fragment>
		)
	}
}

export default HomeView
