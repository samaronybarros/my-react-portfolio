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
					<Breadcrumbs blog name={'What do I need to know about Git?'} />
					<MainH1>What do I need to know about Git?</MainH1>

					<BlogPicture img={img1} />

					<MainParagraph>Hi guys,</MainParagraph>

					<MainParagraph>
						In this article, I'll teach you how to use Git in your projects and how you can get improvement work with
						this amazing tool.
					</MainParagraph>
					<MainParagraph>
						In this tutorial, I’m going to teach you how to create a simple MERN Stack Application.
					</MainParagraph>

					<MainLine />
					<MainParagraph>I'm still building this page.</MainParagraph>
					<MainParagraph>
						Please, I also have this post on{' '}
						<BlogLink href="https://medium.com/swlh/what-do-i-need-to-know-about-git-5017bde0b572" target="_blank">
							Medium
						</BlogLink>{' '}
						and{' '}
						<BlogLink href="https://www.linkedin.com/pulse/what-do-i-need-know-aboutgit-sam-barros/" target="_blank">
							LinkedIn
						</BlogLink>. Feel free to take a look into them while I'm working here. :D
					</MainParagraph>
				</MainDiv>
			</React.Fragment>
		)
	}
}

export default WhatDoINeedKnowAboutGit
