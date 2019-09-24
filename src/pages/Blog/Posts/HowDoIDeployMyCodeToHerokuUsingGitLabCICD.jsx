import React, { Component } from 'react'
import { MainDiv, MainH1, MainParagraph, MainLine, BlogLink } from '../../../styles/Main'

import NavBar from '../../../components/NavBar'
import Breadcrumbs from '../../../components/Breadcrumbs'
import BlogPicture from '../../../components/BlogPicture'

import img1 from '../../../img/blog/deploy/1.jpeg'

class HowDoIDeployMyCodeToHerokuUsingGitLabCICD extends Component {
	render() {
		return (
			<React.Fragment>
				<NavBar />
				<MainDiv>
					<Breadcrumbs blog name={'How do I deploy my code to Heroku using GitLab CI/CD?'} />
					<MainH1>How do I deploy my code to Heroku using GitLab CI/CD?</MainH1>

					<BlogPicture img={img1} />

					<MainParagraph>Hi everyone,</MainParagraph>

					<MainParagraph>
						In this article, I'd like to share how I deploy my code to Heroku using GitLab CI/CD. For this, I'll create
						a simple NodeJS application. Here we'll learn the environments initial concepts: Development, Stage, and
						Production.
					</MainParagraph>
					<MainParagraph>
						When I code, I use these three environments. The Development environment is where everything happens. It's
						the environment where I code all the new features and the tests. When you are in the development process
						this is the environment in your local machine. When I make sure that all the code is ready to deploy, I
						submit it to GitHub/GitLab, depending on the project that I am working on. One person or the team makes the
						code review. If everything is OK we merge and deploy it to Staging. The QA (Quality Assurance) team
						validates and if everything also is OK, we deploy it on Production.
					</MainParagraph>

					<MainLine />
					<MainParagraph>I'm still building this page.</MainParagraph>
					<MainParagraph>
						Please, I also have this post on{' '}
						<BlogLink
							href="https://medium.com/swlh/how-do-i-deploy-my-code-to-heroku-using-gitlab-ci-cd-6a232b6be2e4"
							target="_blank"
						>
							Medium
						</BlogLink>{' '}
						and{' '}
						<BlogLink
							href="https://www.linkedin.com/pulse/how-do-i-deploy-my-code-heroku-using-gitlabcicd-sam-barros/"
							target="_blank"
						>
							LinkedIn
						</BlogLink>. Feel free to take a look into them while I'm working here. :D
					</MainParagraph>
				</MainDiv>
			</React.Fragment>
		)
	}
}

export default HowDoIDeployMyCodeToHerokuUsingGitLabCICD
