import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home/container'
import Curriculum from '../pages/Curriculum/container'

class Routers extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/curriculum" component={Curriculum} />
					<Route path="/blog" component={Curriculum} />
					<Route path="/contact" component={Home} />
				</Switch>
			</Router>
		)
	}
}

export default Routers
