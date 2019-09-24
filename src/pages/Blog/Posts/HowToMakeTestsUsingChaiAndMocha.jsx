import React, { Component } from 'react'
import { MainDiv, MainH1, MainParagraph, MainLine, BlogLink } from '../../../styles/Main'

import NavBar from '../../../components/NavBar'
import Breadcrumbs from '../../../components/Breadcrumbs'
import BlogPicture from '../../../components/BlogPicture'

import img1 from '../../../img/blog/chai/1.jpeg'

class WhatDoINeedKnowAboutGit extends Component {
	render() {
		return (
			<React.Fragment>
				<NavBar />
				<MainDiv>
					<Breadcrumbs blog name={'How to make tests using chai and mocha?'} />
					<MainH1>How to make tests using chai and mocha?</MainH1>

					<BlogPicture img={img1} />

					<MainParagraph>Hi everyone,</MainParagraph>

					<MainParagraph>
						In this article, I'll show you how we can make tests using two awesome tools: chai and mocha.
					</MainParagraph>
					<MainParagraph>
						But first of all, I'd like to tell about the importance of testing. Why tests are so necessary? For this, I
						should explain what TDD is.
					</MainParagraph>

					<MainLine />
					<MainParagraph>I'm still building this page.</MainParagraph>
					<MainParagraph>
						Please, I also have this post on{' '}
						<BlogLink
							href="https://medium.com/@samarony.barros/how-to-make-tests-using-chai-and-mocha-e9db7d8d48bc"
							target="_blank"
						>
							Medium
						</BlogLink>{' '}
						and{' '}
						<BlogLink href="https://www.linkedin.com/pulse/how-make-tests-using-chai-mocha-sam-barros/" target="_blank">
							LinkedIn
						</BlogLink>. Feel free to take a look into them while I'm working here. :D
					</MainParagraph>
				</MainDiv>
			</React.Fragment>
		)
	}
}

export default WhatDoINeedKnowAboutGit
