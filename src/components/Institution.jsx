import React, { Component } from 'react'

import {
	MainCompany,
	MainCurriculumInformation,
	MainRole,
	MainCompanyName,
	MainCompanyDate,
	CompanyDivPicture,
	CompanyImg,
	CompanyDivRole,
} from '../styles/Main'

class Institution extends Component {
	render() {
		const { image, course, institutionName, period, city } = this.props
		return (
			<MainCompany>
				<MainCurriculumInformation>
					<CompanyDivPicture>
						<CompanyImg src={image} />
					</CompanyDivPicture>
					<CompanyDivRole>
						<MainRole>{institutionName}</MainRole>
						<MainCompanyName>{course}</MainCompanyName>
						<MainCompanyDate>{period}</MainCompanyDate>
						<MainCompanyDate>{city}</MainCompanyDate>
					</CompanyDivRole>
				</MainCurriculumInformation>
			</MainCompany>
		)
	}
}

export default Institution
