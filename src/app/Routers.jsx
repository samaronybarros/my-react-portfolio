import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home/container'
import Curriculum from '../pages/Curriculum/container'
import Blog from '../pages/Blog/container'
import Contact from '../pages/Contact/container'

import FirstOfMany from '../pages/Blog/Posts/FirstOfMany'
import HowToCreateYourFirstMERNStack from '../pages/Blog/Posts/HowToCreateYourFirstMERNStack'
import WhatDoINeedKnowAboutGit from '../pages/Blog/Posts/WhatDoINeedKnowAboutGit'

class Routers extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/blog/first-of-many" component={FirstOfMany} />
					<Route path="/blog/how-to-create-your-first-mern-stack" component={HowToCreateYourFirstMERNStack} />
					<Route path="/blog/what-do-i-need-to-know-about-git" component={WhatDoINeedKnowAboutGit} />

					<Route path="/" exact component={Home} />
					<Route path="/curriculum" component={Curriculum} />
					<Route path="/blog" component={Blog} />
					<Route path="/contact" component={Contact} />
				</Switch>
			</Router>
		)
	}
}

export default Routers
