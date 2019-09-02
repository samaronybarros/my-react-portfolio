import React, { Component } from 'react'
import { MainDiv, MainH1, MainParagraph } from '../../../styles/Main'

import NavBar from '../../../components/NavBar'
import Breadcrumbs from '../../../components/Breadcrumbs'
import BlogPicture from '../../../components/BlogPicture'

import { sam } from '../../../img/blog'
import google from '../../../img/blog/first-of-many/google.jpeg'

class FirstOfMany extends Component {
	render() {
		return (
			<React.Fragment>
				<NavBar />
				<MainDiv>
					<Breadcrumbs blog name={'First of Many'} />
					<MainH1>First of Many</MainH1>
					<MainParagraph>Hi everyone,</MainParagraph>
					<MainParagraph>
						Let me introduce myself, my name is Samarony Barros, but I’m also known as Sam Barros. I’m a Senior Software
						Engineer from Brazil and nowadays I’m working in Germany. Yes, I decided to live abroad and I’m very amazed
						because of that. It’s not an easy way to live out your homeland, but I’m having awesome experiences and I’d
						like to share them with you.
					</MainParagraph>

					<BlogPicture img={sam} small />
					<MainParagraph>
						Like many developers, I have had some code issues while I’m doing my job. So, what’s the first thing that a
						developer does to solve it? Google it!!! \o/
					</MainParagraph>
					<BlogPicture img={google} medium />
					<MainParagraph>
						Just a quick search on Google we can find something to help us and I’m very thankful for all the IT
						communities that I found around all my tech career, they are very useful. Thinking about that, I’d decided
						to contribute with devs that do the same work that I do writing about the difficulties that I had and how I
						solved them, I’ll write some tutorials, I’ll tell you about my life as a developer in Europe and how is an
						Engineer’s life here, I’ll talk about some tools that help our development process like Docker, Buildkite,
						not forgetting about our friend GitHub, among others.
					</MainParagraph>
					<MainParagraph>
						Another thing that I’m planning to do is the solution to some exercises from Codility and HackerRank.
					</MainParagraph>
					<MainParagraph>
						Would you like that I should talk about other tools or other subjects? Feel free to tell me about this on
						the comments.
					</MainParagraph>
				</MainDiv>
			</React.Fragment>
		)
	}
}

export default FirstOfMany
