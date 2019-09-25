import React, { Component } from 'react'
import {
	MainDiv,
	MainH1,
	MainParagraph,
	MainLine,
	BlogLink,
	MainQuotation,
	MainUl,
	MainLi,
	MainBlogTitle,
} from '../../../styles/Main'
import Gist from 'react-gist'

import NavBar from '../../../components/NavBar'
import Breadcrumbs from '../../../components/Breadcrumbs'
import BlogPicture from '../../../components/BlogPicture'
import CodeBlock from '../../../components/CodeBlock'

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
						<BlogLink href="https://www.mongodb.com/">Mongo DB</BlogLink>,{' '}
						<BlogLink href="https://expressjs.com/">Express JS</BlogLink>,{' '}
						<BlogLink href="https://reactjs.org/">React JS</BlogLink> and {' '}
						<BlogLink href="https://nodejs.org/en/">Node JS</BlogLink>.
					</MainParagraph>

					<MainQuotation>OK Sam, I’d like to learn how to create my first MERN, but… what does it means?</MainQuotation>

					<MainParagraph>
						Don’t worry, I can explain. You’re facing one of the most relevant Stacks of the world growing fast every
						day, acquiring many developers around the globe in a huge community. The main thing you should know is that,
						with MERN Stack, you’ll work with Javascript. Told this, let me explain what means each letter of this
						acronym.
					</MainParagraph>

					<MainUl>
						<MainLi>
							<b>Mongo DB</b>: A document-based open source database, that provides you scalability and flexibility.
						</MainLi>
						<MainLi>
							<b>Express JS</b>: A structured base designed to develop web applications and APIs.
						</MainLi>
						<MainLi>
							<b>React JS</b>: A Javascript Front-end library for building user interfaces. Maintained by Facebook.
						</MainLi>
						<MainLi>
							<b>Node JS</b>: A javascript runtime built on Chrome’s V8 JS engine.
						</MainLi>
					</MainUl>

					<MainParagraph>
						Maybe you heard about another acronym very similar to MERN, called MEAN, there is, it’s almost the same, but
						the difference is that we use <BlogLink href="https://angularjs.org/">Angular</BlogLink> instead of React.
					</MainParagraph>

					<MainParagraph>
						So, I believe the best way to learn everything is doing a practical example, that means for our case we’re
						going to create a cinema’s movies CRUD (Create, Read, Update and Delete) form.
					</MainParagraph>

					<MainBlogTitle>1. Setting up the Backend</MainBlogTitle>

					<MainParagraph>
						Here, we’re going to create the server side of our application, where we’re going to create a RESTful
						following the steps.
					</MainParagraph>

					<MainParagraph>Firstly, let’s create an empty directory that will be the root of our system.</MainParagraph>

					<CodeBlock>
						$ mkdir movies-app <br />
						$ cd movies-app
					</CodeBlock>

					<MainParagraph>
						After this, let’s create another empty folder called server that will be our backend folder.
					</MainParagraph>

					<CodeBlock>
						$ mkdir server<br />
						$ cd server
					</CodeBlock>

					<MainParagraph>Here, we’ll create our package.json.</MainParagraph>

					<MainQuotation>Will we create what? Sam, what’s a package.json?</MainQuotation>

					<MainParagraph>
						The package.json file is just a manifest for your Node.js project, it contains the metadata of it. You can
						manage the dependencies of your project and make scripts that will help you to install dependencies, to
						generate builds, to run tests and other things.
					</MainParagraph>

					<MainParagraph>
						To create a package.json you need a <b>Package Manager</b>, you can choose{' '}
						<BlogLink href="https://www.npmjs.com/">NPM</BlogLink> (Node Package Manager) or{' '}
						<BlogLink href="https://yarnpkg.com/lang/en/">YARN</BlogLink>. Feel free to use what you prefer.
					</MainParagraph>

					<MainParagraph>So, let’s create our file.</MainParagraph>

					<CodeBlock>
						$ yarn init <br />
						<br />
						or <br />
						<br />
						$ npm init -y
					</CodeBlock>

					<MainParagraph>
						You’ll be asked questions related to your project. If you’d like to keep the default provided by NPM or
						YARN, you can just type enter until the end.
					</MainParagraph>
					<MainParagraph>After that, you can find the file in the server folder.</MainParagraph>
					<CodeBlock>
						$ ls <br />
						package.json
					</CodeBlock>
					<MainParagraph>With this file, we’re able to install our dependencies.</MainParagraph>
					<CodeBlock>
						$ yarn add express body-parser cors mongoose nodemon <br />
						<br />
						or <br />
						<br />
						$ npm install express body-parser cors mongoose nodemon
					</CodeBlock>
					<MainQuotation>Hey Sam, take it easy, what do these names means?</MainQuotation>
					<MainParagraph>Slowly little grasshopper.</MainParagraph>
					<MainUl>
						<MainLi>
							<b>Express</b>: It’s the server framework (The E in M<b>E</b>RN).
						</MainLi>
						<MainLi>
							<b>Body Parser</b>: Responsible to get the body off of network request.
						</MainLi>
						<MainLi>
							<b>Nodemon</b>: Restart the server when it sees changes (for a better dev experience).
						</MainLi>
						<MainLi>
							<b>Cors</b>: Package for providing a Connect/Express middleware that can be used to enable CORS with
							various options.
						</MainLi>
						<MainLi>
							<b>Mongoose</b>: It's an elegant MongoDB object modeling for node.js
						</MainLi>
					</MainUl>
					<MainParagraph>Now you know the basic dependencies that we need at the moment.</MainParagraph>
					<MainParagraph>If you list the server folder you’ll note that something change.</MainParagraph>
					<CodeBlock>
						$ ls <br />
						node_modules package.json yarn.lock
					</CodeBlock>
					<MainParagraph>
						Look at the new folder node_modules and the new file yarn.lock (if you use NPM the file is
						package-lock.json). With these two files, your project is able to be interpreted.
					</MainParagraph>
					<MainParagraph>We can create our first NodeJS file.</MainParagraph>
					<MainParagraph>To start the application you just need to do:</MainParagraph>
					<CodeBlock>$ node index.js</CodeBlock>
					<MainParagraph>
						If you can see the message “Server running on port 3000” it means that everything you’ve done until now it’s
						correct.
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
