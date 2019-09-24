import { keleya, campai, samBarros, objetive, tdq, mconsult, totvs, cco } from '../img/company'

const mainCompanies = [
	{
		image: keleya,
		role: 'Senior Software Engineer',
		companyName: 'Keleya',
		period: 'Mar 2019 - Current',
		city: 'Berlin, Germany',
		activities: [
			`Developing an application to help pregnant women to stay 
        healthy and prepared for birth during the pregnancy using NodeJS, 
        ReactJS, Typescript, Express, and Postgres (Sequelize)`,
			`Responsible for designing, coding, unit testing and debugging the Backend. 
        Using Amazon AWS, Buildkite, Sentry and GitHub.`,
		],
	},
	{
		image: campai,
		role: 'Senior Software Engineer',
		companyName: 'Campai',
		period: 'Oct 2018 - Feb 2019',
		city: 'Berlin, Germany',
		activities: [
			`Developing a platform that makes the management of clubs and associations easy and economical using
                ReactJS, NodeJS, Express, and MongoDB. Besides, developing the relationship network among member and clubs
                using the same technologies above.`,
		],
	},
	{
		image: samBarros,
		role: 'Senior Software Developer',
		companyName: 'Freelancer',
		period: 'Jul 2018 - Oct 2018',
		city: 'Fortaleza, Brazil',
		activities: [
			`I was responsible for developing and architecting an integration model system using Java, JPA, AdvPL, JSON
                and MS SQL, integrating a sales force app and the Protheus ERP (customized or not), building a
                personalized solution.`,
			`I was also working on the development of a Smart Schedule Management System for Dentists, remembering them
                and the patients about appointments, besides providing a medical records system, admin panel, access
                everywhere and Dentists management reports. For this, I'm using Javascript, PHP, HTML5, CSS3, Jquery,
                AJAX, and MySQL`,
		],
	},
	{
		image: objetive,
		role: 'Lead Software Developer',
		companyName: 'Objetive TI',
		period: 'Feb 2016 - Jun 2018',
		city: 'Fortaleza, Brazil',
		activities: [
			`Objective IT is a company founded and located in Fortaleza, Brazil, formed by professionals trained in the
                most diverse areas of Technology, such as systems implementation, development, and infrastructure.`,
			`I was responsible for designing and developing customized ERP (Protheus) solutions using PHP, Javascript,
                AdvPL, Oracle and MS SQL.`,
			`I was also in charge of structuring and managing the area responsible for the Systems Implementation
                Projects, acting as an interface between the company and the client.`,
			`Besides, I coached Development Teams and acted as Project Manager.`,
		],
	},
	{
		image: tdq,
		role: 'Lead Software Developer',
		companyName: 'Tá de Quanto?',
		period: 'Sep 2014 - Jan 2016',
		city: 'Fortaleza, Brazil',
		activities: [
			`"Tá de quanto?" is a tool for consulting and comparing prices on Supermarkets, that is the product
                developed by Dingo Innovations.`,
			`I was responsible for identifying the threats and technological opportunities and for managing the teams
                in charge of the development of new solutions and technologies. I've created a new high-efficiency web
                application solution for comparing and consulting the best prices of products in supermarkets, improving
                system’s throughput and reliability, using Java, PHP, Javascript, Shell Script and PostgreSQL.`,
			`As a co-founder, I was responsible for presenting the company in many startups, congresses, and events.`,
		],
	},
]

const otherCompanies = [
	{
		image: mconsult,
		role: 'Software Developer',
		companyName: 'Mconsult',
		period: 'Apr 2014 - Aug 2014',
		city: 'Fortaleza, Brazil',
		activities: [
			`MConsult is a company specialized in consulting on the Microsiga Protheus System (Totvs) and Process
                Consulting.`,
			`I was responsible for customizing/modifying the customers' ERP to correct existing errors, upgrade
                interfaces and improve performance, using Java, AdvPL, MS SQL and Oracle.`,
		],
	},
	{
		image: totvs,
		role: 'Software Developer',
		companyName: 'TOTVS',
		period: 'Sep 2012 - Apr 2014',
		city: 'Fortaleza, Brazil',
		activities: [
			`TOTVS is a Brazilian multinational company that provides business solutions for companies of all
                sizes, providing management software solutions, collaboration and productivity platforms, hardware and
                consulting services, with absolute leadership in the SMB market in Latin America.`,
			`I was responsible for customizing the ERP (Protheus) depending on customer needs and collect
                stakeholder requirements and submitted to the Project Manager, preparing detailed reports concerning
                project specification activities. I worked, as well, with data manipulation for system analysis,
                helping clients to make better decisions, using Java, PHP, AdvPL, MS SQL and Oracle.`,
		],
	},
	{
		image: cco,
		role: 'Intern',
		companyName: 'CCO/CLDO',
		period: 'Sep 2010 - Aug 2012',
		city: 'Fortaleza, Brazil',
	},
]

export { mainCompanies, otherCompanies }
