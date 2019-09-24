import React, { Component } from 'react'
import {
	MainDiv,
	MainH1,
	MainH2,
	MainH3,
	MainCompanyCollapse,
	MainParagraph,
	CVPicture,
	MainLine,
} from '../styles/Main'
import picture from '../img/sam-picture.jpg'
import Breadcrumbs from './Breadcrumbs'
import Button from './Button'
import Company from './Company'
import Institution from './Institution'

import { mainCompanies, otherCompanies } from '../data/companies'
import { institutions } from '../data/institutions'

class Curriculum extends Component {
	state = {
		showCompanies: false,
	}

	handleShowCompanies = () => this.setState({ showCompanies: !this.state.showCompanies })

	render() {
		return (
			<MainDiv>
				<Breadcrumbs name={'Curriculum'} />

				<MainH1>Curriculum</MainH1>

				<MainH2>Personal Data</MainH2>
				<MainLine />
				<CVPicture src={picture} alt="Sam Barros Picture" />

				<MainH3>Name:</MainH3>
				<MainParagraph>Sam Barros</MainParagraph>

				<MainH3>Position:</MainH3>
				<MainParagraph>Senior Software Engineer</MainParagraph>

				<MainH3>Residence:</MainH3>
				<MainParagraph>Berlin, Germany</MainParagraph>

				<MainH3>Languages:</MainH3>

				<MainParagraph>Portuguese - Native</MainParagraph>
				<MainParagraph>English - Advanced</MainParagraph>
				<MainParagraph>French - Intermediate</MainParagraph>
				<MainParagraph>Spanish - Basic</MainParagraph>

				<MainH2>About me</MainH2>
				<MainLine />

				<MainParagraph>
					My name is Samarony Barros, but I am also known as Sam Barros. I'm a Senior Software Developer with 8+ years
					of experience, more specifically working with Java, PHP, JavaScript, C, and C++. I have created systems and
					customizations to help companies to optimize their process and I have created reports using Business
					Intelligence (BI) to support companies on making the best decision based on real data, not only empirical
					data.
				</MainParagraph>

				<MainParagraph>
					Nowadays, I'm responsible for designing, coding, unit testing and debugging application features as specified,
					applying a keen eye for detail and managing and prioritizing goals to deliver high-quality code. Besides, I
					also act as a Performance Mentor, coaching Developers to improve their software development skills and how to
					become more performative in creating queries on databases.
				</MainParagraph>

				<MainParagraph>
					In one of my personal projects, I'm working on the development of a tool using MERN Technology (MongoDB,
					ExpressJS, ReactJS, and NodeJS). The other one is the development of management tools using Spring Boot,
					Hibernate, REST, Ionic, JWT, S3, MySQL, and MongoDB.
				</MainParagraph>

				<MainParagraph>
					In my entrepreneurial career, I had the opportunity to manage projects and different kinds of teams, leading
					Developers, Consultants, and Designers. As an Entrepreneur, I turned myself into a multidisciplinary and
					committed professional with the ability to adapt to new situations.
				</MainParagraph>

				<MainParagraph>
					I'm proud to have created systems that have contributed to the success and growth of businesses. I'm
					passionate about personal and professional enhancement. In that way, I'm looking for a challenging opportunity
					focused on developing and improving the user experience and making a real impact on people's lives.
				</MainParagraph>

				<MainParagraph>
					If you think that I could add value to your network, add me as a contact. You can also find me at
					samarony.barros@gmail.com and http://sambarros.com
				</MainParagraph>

				<MainH2>Work Experience</MainH2>
				<MainLine />

				{mainCompanies.map((company, index) => (
					<Company
						key={index}
						image={company.image}
						role={company.role}
						companyName={company.companyName}
						period={company.period}
						city={company.city}
						activities={company.activities}
					/>
				))}

				{this.state.showCompanies && (
					<MainCompanyCollapse>
						{otherCompanies.map((company, index) => (
							<Company
								key={index}
								image={company.image}
								role={company.role}
								companyName={company.companyName}
								period={company.period}
								city={company.city}
								activities={company.activities}
							/>
						))}
					</MainCompanyCollapse>
				)}

				<Button onClick={this.handleShowCompanies}>
					{`Show ${this.state.showCompanies ? `less companies ⤒` : `more companies ⤓`}`}
				</Button>

				<MainH2>Education</MainH2>
				<MainLine />

				{institutions.map((institution, index) => (
					<Institution
						key={index}
						image={institution.image}
						course={institution.course}
						institutionName={institution.institutionName}
						period={institution.period}
						city={institution.city}
					/>
				))}

				<MainH2>Technical Skills</MainH2>
				<MainLine />

				<MainH3>7+ years:</MainH3>
				<MainParagraph>Java, PHP, Scrum, MS SQL, Oracle, MySql, and PostgreSQL.</MainParagraph>
				<MainH3>6+ years:</MainH3>
				<MainParagraph>JavaScript, NodeJS, ReactJS, MongoDB, Sequelize, and Bootstrap.</MainParagraph>
				<MainH3>4+ years:</MainH3>
				<MainParagraph>C, C++, Shell Script and Git.</MainParagraph>
				<MainH3>2+ years:</MainH3>
				<MainParagraph>Android, Ruby, Objective-C.</MainParagraph>
			</MainDiv>
		)
	}
}

export default Curriculum
