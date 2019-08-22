import React, { Component } from 'react'
import Navbar from '../../../components/NavBar'
import Cover from '../../../components/Cover'

class HomeView extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Cover />
			</React.Fragment>
		)
	}
}

export default HomeView
