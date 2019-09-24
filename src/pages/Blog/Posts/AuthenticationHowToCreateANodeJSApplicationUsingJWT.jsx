import React, { Component } from 'react'
import { MainDiv, MainH1, MainParagraph, MainLine, BlogLink } from '../../../styles/Main'

import NavBar from '../../../components/NavBar'
import Breadcrumbs from '../../../components/Breadcrumbs'
import BlogPicture from '../../../components/BlogPicture'

import img1 from '../../../img/blog/git/1.jpeg'

class WhatDoINeedKnowAboutGit extends Component {
	render() {
		return (
			<React.Fragment>
				<NavBar />
				<MainDiv>
					<Breadcrumbs blog name={'Authentication: how to create a NodeJS application using JWT'} />
					<MainH1>Authentication: how to create a NodeJS application using JWT</MainH1>

					<BlogPicture img={img1} />

					<MainParagraph>Hi everyone,</MainParagraph>

					<MainParagraph>
						In this article, I'll show you how the fundamentals of JSON Web Token (JWT) and how to authenticate the
						NodeJS APIs with it.
					</MainParagraph>
					<MainParagraph>First of all, we need to know what is the JSON Web Token.</MainParagraph>

					<MainLine />
					<MainParagraph>I'm still building this page.</MainParagraph>
					<MainParagraph>
						Please, I also have this post on{' '}
						<BlogLink
							href="https://medium.com/swlh/authentication-how-to-create-a-nodejs-application-using-jwt-cee8bc5a89fe"
							target="_blank"
						>
							Medium
						</BlogLink>{' '}
						and{' '}
						<BlogLink
							href="https://www.linkedin.com/pulse/authentication-how-create-nodejs-application-using-jwt-sam-barros/"
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

export default WhatDoINeedKnowAboutGit
