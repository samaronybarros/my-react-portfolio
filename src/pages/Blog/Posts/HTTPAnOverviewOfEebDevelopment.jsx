import React, { Component } from 'react'
import { MainDiv, MainH1, MainParagraph, MainLine, BlogLink } from '../../../styles/Main'

import NavBar from '../../../components/NavBar'
import Breadcrumbs from '../../../components/Breadcrumbs'
import BlogPicture from '../../../components/BlogPicture'

import img1 from '../../../img/blog/http/1.jpeg'

class WhatDoINeedKnowAboutGit extends Component {
	render() {
		return (
			<React.Fragment>
				<NavBar />
				<MainDiv>
					<Breadcrumbs blog name={'HTTP: An overview of web development'} />
					<MainH1>HTTP: An overview of web development</MainH1>

					<BlogPicture img={img1} />

					<MainParagraph>Hi guys,</MainParagraph>

					<MainParagraph>
						Have you faced the question: What happens when we type{' '}
						<BlogLink href="http://google.com?" target="_blank">
							http://google.com?
						</BlogLink>
					</MainParagraph>
					<MainParagraph>
						If you were interviewed for a web development role, maybe someone asked this to you.
					</MainParagraph>

					<MainLine />
					<MainParagraph>I'm still building this page.</MainParagraph>
					<MainParagraph>
						Please, I also have this post on{' '}
						<BlogLink href="https://medium.com/swlh/http-an-overview-of-web-development-4f6033efb9da" target="_blank">
							Medium
						</BlogLink>{' '}
						and{' '}
						<BlogLink href="https://www.linkedin.com/pulse/http-overview-web-development-sam-barros/" target="_blank">
							LinkedIn
						</BlogLink>. Feel free to take a look into them while I'm working here. :D
					</MainParagraph>
				</MainDiv>
			</React.Fragment>
		)
	}
}

export default WhatDoINeedKnowAboutGit
