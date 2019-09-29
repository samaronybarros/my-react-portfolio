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
	MainBlogSubTitle,
	MainBlogSubSubTitle,
} from '../../../styles/Main'
import Gist from 'react-gist'

import NavBar from '../../../components/NavBar'
import Breadcrumbs from '../../../components/Breadcrumbs'
import BlogPicture from '../../../components/BlogPicture'
import CodeBlock from '../../../components/CodeBlock'

import img1 from '../../../img/blog/mern/1.jpeg'
import img2 from '../../../img/blog/mern/2.png'
import img3 from '../../../img/blog/mern/3.png'
import img4 from '../../../img/blog/mern/4.png'
import img5 from '../../../img/blog/mern/5.png'
import img6 from '../../../img/blog/mern/6.gif'
import img7 from '../../../img/blog/mern/7.gif'
import img8 from '../../../img/blog/mern/8.gif'
import img9 from '../../../img/blog/mern/9.gif'
import img10 from '../../../img/blog/mern/10.gif'
import img11 from '../../../img/blog/mern/11.png'
import img12 from '../../../img/blog/mern/12.png'
import img13 from '../../../img/blog/mern/13.gif'
import img14 from '../../../img/blog/mern/14.png'
import img15 from '../../../img/blog/mern/15.gif'
import img16 from '../../../img/blog/mern/16.gif'
import img17 from '../../../img/blog/mern/17.gif'
import img18 from '../../../img/blog/mern/18.jpeg'

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
						<b>node_modules</b> package.json yarn.lock
					</CodeBlock>
					<MainParagraph>
						Look at the new folder node_modules and the new file yarn.lock (if you use NPM the file is
						package-lock.json). With these two files, your project is able to be interpreted.
					</MainParagraph>
					<MainParagraph>We can create our first NodeJS file.</MainParagraph>
					<Gist id="e46d7361beee9b00002ff15ab6ab15fa" />
					<MainParagraph>To start the application you just need to do:</MainParagraph>
					<CodeBlock>$ node index.js</CodeBlock>
					<MainParagraph>
						If you can see the message "Server running on port 3000" it means that everything you’ve done until now it’s
						correct.
					</MainParagraph>
					<BlogPicture medium img={img2} />
					<MainParagraph>
						You can open a browser and type localhost:3000, you’ll see the message “Hello World”.
					</MainParagraph>
					<BlogPicture medium img={img3} />
					<MainParagraph>Awesome!!! You’re able to see your server running.</MainParagraph>
					<MainBlogSubTitle>1.1. Installing MongoDB</MainBlogSubTitle>
					<MainParagraph>For now, we need to install MongoDB. For this, just type on your terminal:</MainParagraph>
					<CodeBlock>$ brew install mongodb</CodeBlock>
					<MainQuotation>Hey Sam, I don’t use Mac, my OS is Linux (or Windows). What I should do?</MainQuotation>
					<MainParagraph>
						This is a very simple case, you can just follow the step on this link provided by MongoDB.
					</MainParagraph>
					<MainParagraph>
						Having MongoDB installed, you need to create the directory where you’re going to store the data.
					</MainParagraph>
					<CodeBlock>$ mkdir -p /data/db</CodeBlock>
					<MainParagraph>To execute MongoDB as a service:</MainParagraph>
					<CodeBlock>$ brew services start mongodb</CodeBlock>
					<MainParagraph>Nice! The next step is creating our database that we call it: cinema.</MainParagraph>
					<CodeBlock>
						$ mongo <br />
						> use cinema
					</CodeBlock>
					<BlogPicture medium img={img4} />
					<MainParagraph>And that’s it, we’ve just created our database with these commands. Easy peasy.</MainParagraph>
					<MainParagraph>
						Coming back to our javascript code, we need to create the connection from our server using the Mongoose
						library.
					</MainParagraph>
					<MainParagraph>
						Let’s create a new directory called DB (inside server folder) and a new file called index.js inside of it.
					</MainParagraph>
					<CodeBlock>
						$ mkdir db <br />
						$ touch index.js
					</CodeBlock>
					<Gist id="e3f3a3e3642de43c0ec82d0984b4a334" />
					<MainParagraph>Updating the main file server/index.js we have something like this.</MainParagraph>
					<Gist id="d674d47d126f97c7de56911a931b9b3a" />
					<MainParagraph>
						If you take a look at your terminal, you see that nothing changed. This is because when you type node
						index.js that means node keeps the last set up before it started. If you’d like to restart the application
						you need to close and open a new one. However, at the beginning of this tutorial, I told you about nodemon,
						it’s going to restart the server every time when it sees changes in any file of our project. From, now let’s
						do this.
					</MainParagraph>
					<CodeBlock>$ nodemon index.js</CodeBlock>
					<BlogPicture medium img={img5} />
					<MainBlogSubSubTitle>1.1.1. Creating Movie’s Schema</MainBlogSubSubTitle>
					<MainParagraph>
						As we’ve said, we need to create an entity called <b>movies,</b> that should be composed of the movies of a
						cinema. For this, we just need to know the name of the movie and the times the movie is passing on the
						cinema, and to add an important, but not necessary information, the rating.
					</MainParagraph>
					<MainParagraph>Let’s create a folder called models and add a file called movie-model.js.</MainParagraph>
					<CodeBlock>
						$ mkdir models <br />
						$ cd models <br />
						$ touch movie-model.js
					</CodeBlock>
					<Gist id="57399a63f5584bff829979a8cd645399" />
					<MainBlogSubTitle>1.2. Creating routes</MainBlogSubTitle>
					<MainParagraph>
						Here, we’ll create all the CRUD operations and create our REST endpoints. Let’s create two more folders on
						the server: <i>routes</i> and <i>controllers</i>. In the route folder, let’s create the file{' '}
						<i>movie-router.js</i> and in the controller folder, <i>movie-ctrl.js</i>.
					</MainParagraph>
					<CodeBlock>
						$ mkdir routes controllers <br />
						$ touch routes/movie-router.js <br />
						$ touch controllers/movie-ctrl.js
					</CodeBlock>
					<Gist id="702991f06e9670e2d4ae202d2b8664a9" />
					<Gist id="1b6160d04c1212ed5ac9b5f8af810fd3" />
					<MainParagraph>
						Lastly, let’s add the router in our <i>server/index.js</i> file.
					</MainParagraph>
					<Gist id="1510460850b4adfa5203fab319aed0b8" />
					<MainBlogSubTitle>1.3. Testing manually our application</MainBlogSubTitle>
					<MainParagraph>
						To test our application I’d like to introduce two more tools:{' '}
						<BlogLink href="https://www.getpostman.com/">Postman</BlogLink> and{' '}
						<BlogLink href="https://robomongo.org/">Robo 3T</BlogLink>. These tools will help us in verify our
						application working (I won’t explain how to install because it’s easy and you can find this in their own
						websites).
					</MainParagraph>
					<MainParagraph>
						For now, let’s test add a new movie. Firstly, we should create a JSON file containing the movie’s
						information.
					</MainParagraph>
					<CodeBlock>
						<p>{'{'}</p>
						<p style={{ marginLeft: '40px' }}>"name": "Avengers: Endgame",</p>
						<p style={{ marginLeft: '40px' }}>"time": ["14:15", "16:00", "21:30", "23:00"], </p>
						<p style={{ marginLeft: '40px' }}>"rating": 8.8</p>
						<p>{'}'}</p>
					</CodeBlock>
					<MainParagraph>
						For this, we need to <b>POST</b> this information in the database.
					</MainParagraph>
					<BlogPicture img={img6} />
					<MainParagraph>
						Imagine that the success of the movie was so big that the cinema has decided to add one more session. We
						have to update this. Using the PUT method, but this time, providing the movie's id. We can do this.
					</MainParagraph>
					<CodeBlock>
						<p>{'{'}</p>
						<p style={{ marginLeft: '40px' }}>"name": "Avengers: Endgame",</p>
						<p style={{ marginLeft: '40px' }}>"time": ["12:00", "14:15", "16:00", "21:30", "23:00"], </p>
						<p style={{ marginLeft: '40px' }}>"rating": 8.8</p>
						<p>{'}'}</p>
					</CodeBlock>
					<BlogPicture img={img7} />
					<MainParagraph>Let’s add two more movies.</MainParagraph>
					<CodeBlock>
						<p>{'{'}</p>
						<p style={{ marginLeft: '40px' }}>"name": "The Lord Of The Rings: The return of the king",</p>
						<p style={{ marginLeft: '40px' }}>"time": ["15:00", "20:00"], </p>
						<p style={{ marginLeft: '40px' }}>"rating": 8.9</p>
						<p>{'}'}</p>
						<p>and</p>
						<p>{'{'}</p>
						<p style={{ marginLeft: '40px' }}>"name": "The Godfather",</p>
						<p style={{ marginLeft: '40px' }}>"time": ["21:00", "23:50"], </p>
						<p style={{ marginLeft: '40px' }}>"rating": 9.2</p>
						<p>{'}'}</p>
					</CodeBlock>
					<MainParagraph>
						And we’ll get all the movies with the <b>GET</b> method.
					</MainParagraph>
					<BlogPicture img={img8} />
					<MainParagraph>
						With the same <b>GET</b> method, we'll select only the information about the movie "The Godfather".
					</MainParagraph>
					<BlogPicture img={img9} />
					<MainParagraph>And finally, let’s DELETE the same movie.</MainParagraph>
					<BlogPicture img={img10} />
					<MainParagraph>
						Phew!!! We’ve finished the backend part. With all this knowledge you’re able to create other entities, try
						to create a user entity, maybe an employee or a table price, use your imagination.
					</MainParagraph>
					<MainParagraph>Let’s start the setting up of the Frontend.</MainParagraph>
					<MainLine />

					<MainBlogTitle>2. Setting up the Frontend</MainBlogTitle>
					<MainParagraph>
						Here we’re going to create all the visual part, where the user will interact with our tool.
					</MainParagraph>
					<MainParagraph>
						The first thing that we should do is go to the root of our project and create the client side. For this, we
						need to understand about NPX.
					</MainParagraph>
					<MainParagraph>
						NPX is a tool that its goal is to help round out the experience of using packages from the NPM registry. As
						NPM makes it super easy to install and manage dependencies hosted on the registry, NPX makes it easy to use
						CLI tools and other executables hosted on the registry.
					</MainParagraph>
					<MainParagraph>
						Knowing this, let’s create our director. If you have the <b>server</b> side for the Backend, we have the{' '}
						<b>client</b> side for the Frontend.
					</MainParagraph>
					<CodeBlock>
						$ npx create-react-app client <br />
						$ cd client <br />
						$ yarn start
					</CodeBlock>
					<MainParagraph>If the application opened this screen that means you’ve done the things right.</MainParagraph>
					<BlogPicture img={img11} />
					<MainParagraph>
						The default port is the number 3000, but we’ve already set this port to our Backend. Then, let’s changes it
						to 8000.
					</MainParagraph>
					<MainQuotation>Hey Sam, why did you choose the port 8000?</MainQuotation>
					<MainParagraph>
						Nothing special, I like this number and I currently use 3000 to backend and 8000 to frontend.{' '}
						<span role="img" aria-label="shrug">
							🤷🏻‍
						</span>
					</MainParagraph>
					<MainParagraph
					>{`To change the port we need to change it on client/package.json. Include PORT=<port number> in the file.`}</MainParagraph>
					<Gist id="3e4cb03a5f8abc27992ed8a802944632" />
					<MainParagraph>
						Good! Probably you found out that React creates some default files. Let’s remove the unnecessaries files for
						us.
					</MainParagraph>
					<CodeBlock>$ rm App.css index.css App.test.js serviceWorker.js</CodeBlock>
					<MainParagraph>
						For now, you don’t need to worry about these files, maybe in another post, I can explain them.
					</MainParagraph>
					<MainQuotation>
						Sam, it’s boring, when will I see my application running?{' '}
						<span role="img" aria-label="cmon">
							😩
						</span>
					</MainQuotation>
					<MainParagraph>
						Patience my dear friend, as Axl Rose said: “All we need is just a little patience”. In a few minutes, you’ll
						see your App running.
					</MainParagraph>
					<MainParagraph>
						But first, we need to set up our project installing the dependencies. we’ll need <b>Axios</b>,{' '}
						<b>Bootstrap</b>, <b>StyledComponents</b> and <b>React Table</b>.
					</MainParagraph>
					<MainUl>
						<MainLi>
							<b>axios</b>: It’s a promise-based the asynchronous code. It’s the most popular promise based HTTP.
						</MainLi>
						<MainLi>
							<b>bootstrap</b>: It’s is an open-source toolkit and the most popular front-end component library where
							allows you for developing with HTML, CSS, and JS.
						</MainLi>
						<MainLi>
							<b>styled-components</b>: It allows you to write actual CSS code to style your components.
						</MainLi>
						<MainLi>
							<b>react-table</b>: It’s a lightweight, fast and extendable data grid built for React.
						</MainLi>
						<MainLi>
							<b>react-router-dom</b>: DOM bindings for React Routers.
						</MainLi>
					</MainUl>
					<CodeBlock>
						$ yarn add styled-components react-table react-router-dom axios bootstrap <br /> <br />
						or <br /> <br />
						$ npm install styled-components react-table react-router-dom axios bootstrap --save
					</CodeBlock>
					<MainParagraph>
						In the src directory, we should create the new directories that will be the structure of our project. Create
						an index.js file inside each directory, except app folder.
					</MainParagraph>
					<CodeBlock>
						$ cd src <br />
						$ mkdir api app components pages style <br />
						$ touch api/index.js components/index.js pages/index.js style/index.js
					</CodeBlock>
					<MainParagraph>
						Move the <i>App.js</i> file to the app directory, but renaming to index.js.
					</MainParagraph>
					<CodeBlock>$ mv App.js app/index.js</CodeBlock>
					<MainParagraph>
						Now we can code.{' '}
						<span role="img" aria-label="ok">
							🙂
						</span>
					</MainParagraph>
					<MainParagraph>
						First of all, update our file <i>client/src/index.js</i> for the following code.
					</MainParagraph>
					<Gist id="7c1d4e48be5fa6d5cd27ef1e10b18ccc" />
					<MainParagraph>
						After this, we’ll develop the header of the application. Now, we’ll developer the components of our project.
						Create the new files NavBar.jsx, Logo.jsx, and Links.jsx.
					</MainParagraph>
					<CodeBlock>$ touch components/NavBar.jsx components/Logo.jsx components/Links.jsx</CodeBlock>
					<MainQuotation>
						Wait a minute Sam! Now I’m seeing instead of JS you’re using JSX. Why are doing this?
					</MainQuotation>
					<MainParagraph>
						Simple, <b>JSX</b> is a notation that Reacts chose to identify a <b>J</b>ava<b>S</b>cript’s e<b>X</b>tension.
						It’s recommended to use it with React to describe what the UI should look like.
					</MainParagraph>
					<MainParagraph>Knowing this, let’s create our files.</MainParagraph>
					<Gist id="8ab5511fa0bdda9befaf69aeadcdb8b0" />
					<Gist id="73d965275e69946c02cabf5cd5775618" />
					<Gist id="02cf7dd32287b9e6f471f41d18cc1a15" />
					<MainParagraph>
						You can see how clean are our files. Do you remember that we created the file components/index.js? This file
						we export our components, it will allow us to import them in other files using the notation:
					</MainParagraph>
					<CodeBlock>
						<b>import</b> {'{ blabla }'} <b>from</b> './components'
					</CodeBlock>
					<MainParagraph>Look at how simple it’s.</MainParagraph>
					<Gist id="df4c565b7312b9f217cc80c1ac92ca66" />
					<MainParagraph>
						Updating <i>app/index.js</i>. We’re able to see the growth of the project.
					</MainParagraph>
					<Gist id="4172d7212806ceb133a1202b8b8c4820" />
					<BlogPicture img={img12} />
					<MainLine />
					<MainBlogSubTitle>2.1. Integrating BE and FE</MainBlogSubTitle>
					<MainParagraph>Now we'll learn how to integrate the backend with our Frontend.</MainParagraph>
					<MainParagraph>
						First of all, let's update the file <i>api/index.js</i>.
					</MainParagraph>
					<Gist id="6f7dfad88ddaaec910948e35c150f824" />
					<MainParagraph>
						Amazing! Now we can develop our routes. For this, we'll need to update the file app/index.js adding the
						routes.
					</MainParagraph>
					<Gist id="6f7dfad88ddaaec910948e35c150f824" />
					<MainParagraph>6b186c741c86c97e7bbf2d208fc37758</MainParagraph>
					<MainParagraph>
						On pages folder, let's create the files that will do the role of each application's page: MoviesList.jsx,
						MoviesInsert.jsx and MoviesUpdate.jsx.
					</MainParagraph>
					<CodeBlock>
						$ cd pages <br />
						$ touch MoviesList.jsx MoviesInsert.jsx MoviesUpdate.jsx
					</CodeBlock>
					<MainParagraph>
						For now, let's create simples files where you can see the page's transition when you click in each link of
						the NavBar.
					</MainParagraph>
					<Gist id="81313ab05038686e6711949a1dbc22ac" />
					<Gist id="921f2e0e170d0a5c43138ddf91b7001e" />
					<Gist id="c083a0d38b600185967140086a32e833" />
					<Gist id="6dd6f43a27e8b4b8c690406425cb222c" />
					<MainParagraph>Look at how simple it is.</MainParagraph>
					<BlogPicture img={img13} />
					<MainQuotation>
						Hey Sam, I've seen something strange. In the code of the route to update the movie you put ":id" with a
						colon, but in the browser, you just put without the colon… why?
					</MainQuotation>
					<MainParagraph>
						Because the colon means that React is waiting for a variable, that is, on the <b>params</b> object we have a
						variable called <b>id</b>. Further ahead, you'll see something like this.
					</MainParagraph>
					<CodeBlock>
						<i>this</i>.props.match.params.id
					</CodeBlock>
					<MainParagraph>
						OK, let's edit our file to get the movies from the database: <i>MoviesList.jsx</i>.
					</MainParagraph>
					<Gist id="ca37f578756ee130a8903ee3ccd67cad" />
					<BlogPicture img={img14} />
					<MainParagraph>
						Awesome, in this list let's include two more things, these things will be buttons. One button to{' '}
						<b>delete</b> e another button to <b>update</b>.
					</MainParagraph>
					<Gist id="e5ddc36849c8b283f56c0d95243ca5b2" />
					<BlogPicture img={img15} />
					<MainParagraph>
						As you can see, now we're able to delete a movie, but we still not able to update it, because we haven't
						finished the component yet.
					</MainParagraph>
					<MainParagraph>Before, to develop the update page, let's create the insertion page.</MainParagraph>
					<Gist id="e6af78e631cf277a8ceec811def6250e" />
					<BlogPicture img={img16} />
					<MainParagraph>And finally, let's create the update file.</MainParagraph>
					<Gist id="d27da28ef7f94219c4ba0404d998a87d" />
					<BlogPicture img={img17} />
					<MainBlogTitle>3. Conclusion</MainBlogTitle>
					<BlogPicture img={img18} />
					<MainParagraph>
						And that's it, friend. In this article, you have seen the structure to build a MERN application using
						diverse libraries provided by an amazing community around the world.
					</MainParagraph>
					<MainParagraph>
						In this article, my intuit was to keep the things simple for your understanding. This is a project that you
						can do many enhancements.
					</MainParagraph>
					<MainParagraph>
						Maybe you can try, for instance, create a better structure to include the time of the movies or you can
						improve the code to put the update and insertion movie in the same file, what about to create a new entity
						called customer and create the same REST operation for it? You can add a lot of new features for this. If
						you prefer, tell me on the comments.
					</MainParagraph>
					<MainParagraph>
						I hope that I have contributed to your knowledge. Feel free to tell me what I should improve to write better
						articles.
					</MainParagraph>
					<MainParagraph>
						The complete project you can find in my GitHub and search for the movies-app repository.
					</MainParagraph>
					<MainParagraph>Thank you for your patience in reading this. See you in the next post.</MainParagraph>
					<MainLine />
					<MainParagraph>
						You also can see this post on {' '}
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
						</BlogLink>.
					</MainParagraph>
				</MainDiv>
			</React.Fragment>
		)
	}
}

export default HowToCreateYourFirstMERNStack
