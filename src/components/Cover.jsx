import React, { Component } from 'react'
import {
	CoverMain,
	CoverSpan,
	ProfilePicture,
	ProfilePictureImg,
	ProfileTitle,
	ProfileTitleH1,
	ProfileTitleH2,
} from '../styles/Cover'
import picture from '../img/sam-picture.jpg'
class Cover extends Component {
	render() {
		return (
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
		)
	}
}

export default Cover
