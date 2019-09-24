import React, { Component } from 'react'
import { MainDiv, MainH1, MainParagraph, MainLine, BlogLink } from '../../../styles/Main'
import Gist from 'react-gist'

import NavBar from '../../../components/NavBar'
import Breadcrumbs from '../../../components/Breadcrumbs'
import BlogPicture from '../../../components/BlogPicture'

import img1 from '../../../img/blog/mern/1.jpeg'

class HowToCreateYourFirstMERNStack extends Component {
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

					<Gist id="e46d7361beee9b00002ff15ab6ab15fa" />

					<MainLine />
					<MainParagraph>I'm still building this page.</MainParagraph>
					<MainParagraph>
						Please, I also have this post on{' '}
						<BlogLink
							href="https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66"
							target="_blank"
						>
							Medium
						</BlogLink>{' '}
						and{' '}
						<BlogLink
							href="https://www.linkedin.com/pulse/how-create-your-first-mern-mongodb-express-js-react-node-sam-barros/"
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

export default HowToCreateYourFirstMERNStack
