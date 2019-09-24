import React, { Component } from 'react'
import {
	MainDiv,
	MainH1,
	MainH2,
	MainH3,
	MainCompanyCollapse,
	MainCompany,
	MainParagraph,
	MainCurriculumInformation,
	MainRole,
	MainCompanyName,
	MainCompanyDate,
	CompanyDivPicture,
	CVPicture,
	MainLine,
	CompanyImg,
	CompanyDivRole,
	MainCurriculumDescription,
	MainDescription,
	MainTextDescription,
} from '../styles/Main'
import picture from '../img/sam-picture.jpg'
import Breadcrumbs from './Breadcrumbs'
import Button from './Button'

import { keleya, campai, samBarros, objetive, tdq, mconsult, totvs, cco } from '../img/company'

import { uece, estacio } from '../img/institution'

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
				<MainParagraph>German - Basic</MainParagraph>

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

				<MainCompany>
					<MainCurriculumInformation>
						<CompanyDivPicture>
							<CompanyImg src={keleya} />
						</CompanyDivPicture>
						<CompanyDivRole>
							<MainRole>Senior Software Engineer</MainRole>
							<MainCompanyName>Keleya</MainCompanyName>
							<MainCompanyDate>Mar 2019 - Current</MainCompanyDate>
							<MainCompanyDate>Berlin, Germany</MainCompanyDate>
						</CompanyDivRole>
					</MainCurriculumInformation>
					<MainCurriculumDescription>
						<MainDescription>Description</MainDescription>
						<MainTextDescription>
							Developing an application to help pregnant women to stay healthy and prepared for birth during the
							pregnancy using NodeJS, ReactJS, Typescript, Express, and Postgres (Sequelize)
						</MainTextDescription>
						<MainTextDescription>
							Responsible for designing, coding, unit testing and debugging the Backend. Using Amazon AWS, Buildkite,
							Sentry and GitHub.
						</MainTextDescription>
					</MainCurriculumDescription>
				</MainCompany>

				<MainCompany>
					<MainCurriculumInformation>
						<CompanyDivPicture>
							<CompanyImg src={campai} />
						</CompanyDivPicture>
						<CompanyDivRole>
							<MainRole>Senior Software Engineer</MainRole>
							<MainCompanyName>Keleya</MainCompanyName>
							<MainCompanyDate>Mar 2019 - Current</MainCompanyDate>
							<MainCompanyDate>Berlin, Germany</MainCompanyDate>
						</CompanyDivRole>
					</MainCurriculumInformation>
					<MainCurriculumDescription>
						<MainDescription>Description</MainDescription>
						<MainTextDescription>
							Developing a platform that makes the management of clubs and associations easy and economical using
							ReactJS, NodeJS, Express, and MongoDB. Besides, developing the relationship network among member and clubs
							using the same technologies above.
						</MainTextDescription>
					</MainCurriculumDescription>
				</MainCompany>

				<MainCompany>
					<MainCurriculumInformation>
						<CompanyDivPicture>
							<CompanyImg src={samBarros} />
						</CompanyDivPicture>
						<CompanyDivRole>
							<MainRole>Senior Software Developer</MainRole>
							<MainCompanyName>Freelancer</MainCompanyName>
							<MainCompanyDate>Jul 2018 - Oct 2018</MainCompanyDate>
							<MainCompanyDate>Fortaleza, Brazil</MainCompanyDate>
						</CompanyDivRole>
					</MainCurriculumInformation>
					<MainCurriculumDescription>
						<MainDescription>Description</MainDescription>
						<MainTextDescription>
							I was responsible for developing and architecting an integration model system using Java, JPA, AdvPL, JSON
							and MS SQL, integrating a sales force app and the Protheus ERP (customized or not), building a
							personalized solution.
						</MainTextDescription>
						<MainTextDescription>
							I was also working on the development of a Smart Schedule Management System for Dentists, remembering them
							and the patients about appointments, besides providing a medical records system, admin panel, access
							everywhere and Dentists management reports. For this, I'm using Javascript, PHP, HTML5, CSS3, Jquery,
							AJAX, and MySQL
						</MainTextDescription>
					</MainCurriculumDescription>
				</MainCompany>

				<MainCompany>
					<MainCurriculumInformation>
						<CompanyDivPicture>
							<CompanyImg src={objetive} />
						</CompanyDivPicture>
						<CompanyDivRole>
							<MainRole>Lead Software Developer</MainRole>
							<MainCompanyName>Objetive TI</MainCompanyName>
							<MainCompanyDate>Feb 2016 - Jun 2018</MainCompanyDate>
							<MainCompanyDate>Fortaleza, Brazil</MainCompanyDate>
						</CompanyDivRole>
					</MainCurriculumInformation>
					<MainCurriculumDescription>
						<MainDescription>Description</MainDescription>
						<MainTextDescription>
							Objective IT is a company founded and located in Fortaleza, Brazil, formed by professionals trained in the
							most diverse areas of Technology, such as systems implementation, development, and infrastructure.
						</MainTextDescription>
						<MainTextDescription>
							I was responsible for designing and developing customized ERP (Protheus) solutions using PHP, Javascript,
							AdvPL, Oracle and MS SQL.
						</MainTextDescription>
						<MainTextDescription>
							I was also in charge of structuring and managing the area responsible for the Systems Implementation
							Projects, acting as an interface between the company and the client.
						</MainTextDescription>
						<MainTextDescription>
							Besides, I coached Development Teams and acted as Project Manager.
						</MainTextDescription>
					</MainCurriculumDescription>
				</MainCompany>

				<MainCompany>
					<MainCurriculumInformation>
						<CompanyDivPicture>
							<CompanyImg src={tdq} />
						</CompanyDivPicture>
						<CompanyDivRole>
							<MainRole>Lead Software Developer</MainRole>
							<MainCompanyName>Tá de Quanto?</MainCompanyName>
							<MainCompanyDate>Sep 2014 - Jan 2016</MainCompanyDate>
							<MainCompanyDate>Fortaleza, Brazil</MainCompanyDate>
						</CompanyDivRole>
					</MainCurriculumInformation>
					<MainCurriculumDescription>
						<MainDescription>Description</MainDescription>
						<MainTextDescription>
							"Tá de quanto?" is a tool for consulting and comparing prices on Supermarkets, that is the product
							developed by Dingo Innovations.
						</MainTextDescription>
						<MainTextDescription>
							I was responsible for identifying the threats and technological opportunities and for managing the teams
							in charge of the development of new solutions and technologies. I've created a new high-efficiency web
							application solution for comparing and consulting the best prices of products in supermarkets, improving
							system’s throughput and reliability, using Java, PHP, Javascript, Shell Script and PostgreSQL.
						</MainTextDescription>
						<MainTextDescription>
							As a co-founder, I was responsible for presenting the company in many startups, congresses, and events.
						</MainTextDescription>
					</MainCurriculumDescription>
				</MainCompany>

				{this.state.showCompanies && (
					<MainCompanyCollapse>
						<MainCompany>
							<MainCurriculumInformation>
								<CompanyDivPicture>
									<CompanyImg src={mconsult} />
								</CompanyDivPicture>
								<CompanyDivRole>
									<MainRole>Software Developer</MainRole>
									<MainCompanyName>Mconsult</MainCompanyName>
									<MainCompanyDate>Apr 2014 - Aug 2014</MainCompanyDate>
									<MainCompanyDate>Fortaleza, Brazil</MainCompanyDate>
								</CompanyDivRole>
							</MainCurriculumInformation>
							<MainCurriculumDescription>
								<MainDescription>Description</MainDescription>
								<MainTextDescription>
									MConsult is a company specialized in consulting on the Microsiga Protheus System (Totvs) and Process
									Consulting.
								</MainTextDescription>
								<MainTextDescription>
									I was responsible for customizing/modifying the customers' ERP to correct existing errors, upgrade
									interfaces and improve performance, using Java, AdvPL, MS SQL and Oracle.
								</MainTextDescription>
							</MainCurriculumDescription>
						</MainCompany>

						<MainCompany>
							<MainCurriculumInformation>
								<CompanyDivPicture>
									<CompanyImg src={totvs} />
								</CompanyDivPicture>
								<CompanyDivRole>
									<MainRole>Software Developer</MainRole>
									<MainCompanyName>TOTVS</MainCompanyName>
									<MainCompanyDate>Sep 2012 - Apr 2014</MainCompanyDate>
									<MainCompanyDate>Fortaleza, Brazil</MainCompanyDate>
								</CompanyDivRole>
							</MainCurriculumInformation>
							<MainCurriculumDescription>
								<MainDescription>Description</MainDescription>
								<MainTextDescription>
									TOTVS is a Brazilian multinational company that provides business solutions for companies of all
									sizes, providing management software solutions, collaboration and productivity platforms, hardware and
									consulting services, with absolute leadership in the SMB market in Latin America.
								</MainTextDescription>
								<MainTextDescription>
									I was responsible for customizing the ERP (Protheus) depending on customer needs and collect
									stakeholder requirements and submitted to the Project Manager, preparing detailed reports concerning
									project specification activities. I worked, as well, with data manipulation for system analysis,
									helping clients to make better decisions, using Java, PHP, AdvPL, MS SQL and Oracle.
								</MainTextDescription>
							</MainCurriculumDescription>
						</MainCompany>

						<MainCompany>
							<MainCurriculumInformation>
								<CompanyDivPicture>
									<CompanyImg src={cco} />
								</CompanyDivPicture>
								<CompanyDivRole>
									<MainRole>Intern</MainRole>
									<MainCompanyName>CCO/CLDO</MainCompanyName>
									<MainCompanyDate>Sep 2010 - Aug 2012</MainCompanyDate>
									<MainCompanyDate>Fortaleza, Brazil</MainCompanyDate>
								</CompanyDivRole>
							</MainCurriculumInformation>
						</MainCompany>
					</MainCompanyCollapse>
				)}

				<Button onClick={this.handleShowCompanies}>
					{`Show ${this.state.showCompanies ? `less companies ⤒` : `more companies ⤓`}`}
				</Button>

				<MainH2>Education</MainH2>
				<MainLine />

				<MainCompany>
					<MainCurriculumInformation>
						<CompanyDivPicture>
							<CompanyImg src={estacio} />
						</CompanyDivPicture>
						<CompanyDivRole>
							<MainRole>Estácio</MainRole>
							<MainCompanyName>MBA in Software Engineering</MainCompanyName>
							<MainCompanyDate>2017 - 2019</MainCompanyDate>
							<MainCompanyDate>Fortaleza, Brazil</MainCompanyDate>
						</CompanyDivRole>
					</MainCurriculumInformation>
				</MainCompany>

				<MainCompany>
					<MainCurriculumInformation>
						<CompanyDivPicture>
							<CompanyImg src={uece} />
						</CompanyDivPicture>
						<CompanyDivRole>
							<MainRole>State University of Ceara</MainRole>
							<MainCompanyName>Computer Sicence</MainCompanyName>
							<MainCompanyDate>2007 - 2012</MainCompanyDate>
							<MainCompanyDate>Fortaleza, Brazil</MainCompanyDate>
						</CompanyDivRole>
					</MainCurriculumInformation>
				</MainCompany>

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
