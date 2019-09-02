import React, { Component } from 'react'
import { MainDiv, MainH1, MainParagraph, BlogLink } from '../../../styles/Main'
import Gist from 'react-gist'

import NavBar from '../../../components/NavBar'
import Breadcrumbs from '../../../components/Breadcrumbs'
import BlogPicture from '../../../components/BlogPicture'

import img1 from '../../../img/blog/mern/1.jpeg'

class FirstOfMany extends Component {
	render() {
		return (
			<React.Fragment>
				<NavBar />
				<MainDiv>
					<Breadcrumbs blog name={'How to create your first MERN (MongoDB, Express JS, React JS and Node JS) Stack'} />
					<MainH1>How to create your first MERN (MongoDB, Express JS, React JS and Node JS) Stack</MainH1>

					<BlogPicture img={img1} />

					<MainParagraph>Hi guys,</MainParagraph>

					<MainParagraph>
						Do you know how to create a MERN Stack? Do you know what a MERN Stack is? Do you know when you will you need
						a MERN Stack?
					</MainParagraph>
					<MainParagraph>
						In this tutorial, I’m going to teach you how to create a simple MERN Stack Application.
					</MainParagraph>
					<MainParagraph>
						First of all, a MERN Stack is a combination of four technologies:{' '}
						<BlogLink href="https://www.mongodb.com/">Mongo DB</BlogLink>, Express JS, React JS and Node JS.
					</MainParagraph>
					<MainParagraph />
					<MainParagraph />
					<MainParagraph />
					<MainParagraph />
					<MainParagraph />
					<MainParagraph />
					<MainParagraph />
					<MainParagraph />
					<MainParagraph />
					<MainParagraph />
					<MainParagraph />
					<MainParagraph />
					<MainParagraph />
					<MainParagraph />
					<MainParagraph />
					<MainParagraph />
					<MainParagraph />
					<MainParagraph />
					<MainParagraph />
					<MainParagraph />

					<Gist id="e46d7361beee9b00002ff15ab6ab15fa" />
				</MainDiv>
			</React.Fragment>
		)
	}
}

export default FirstOfMany
