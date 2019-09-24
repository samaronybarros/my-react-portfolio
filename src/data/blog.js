import { sam, mern, deploy, git, http, jwt, chaiMocha } from '../img/blog'

const posts = [
	{
		img: sam,
		link: '/blog/first-of-many',
		title: 'First of many',
		subtitle: '26.05.19 - 2 min read',
	},
	{
		img: mern,
		link: '/blog/how-to-create-your-first-mern-stack',
		title: 'How to create your first MERN (MongoDB, Express JS, React JS and Node JS) Stack',
		subtitle: '02.06.19 - 11 min read',
	},
	,
	{
		img: git,
		link: '/blog/what-do-i-need-to-know-about-git',
		title: 'What do I need to know about Git?',
		subtitle: '09.06.19 - 10 min read',
	},
	{
		img: jwt,
		link: '/blog/authentication-how-create-nodejs-application-using-jwt',
		title: 'Authentication: how to create a NodeJS application using JWT',
		subtitle: '21.06.19 - 8 min read',
	},
	,
	{
		img: http,
		link: '/blog/http-overview-web-development',
		title: 'HTTP: An overview of web development',
		subtitle: '01.08.19 - 8 min read',
	},
	{
		img: deploy,
		link: '/blog/how-do-i-deploy-my-code-heroku-using-gitlab-cicd',
		title: 'How do I deploy my code to Heroku using GitLab CI/CD?',
		subtitle: '18.08.19 - 8 min read',
	},
	{
		img: chaiMocha,
		link: '/blog/how-make-tests-using-chai-mocha',
		title: 'How to make tests using chai and mocha?',
		subtitle: '31.08.19 - 7 min read',
	},
]

export { posts }
