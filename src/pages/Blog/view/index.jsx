import React, { Component } from 'react'
import Navbar from '../../../components/NavBar'
import Blog from '../../../components/Blog'

class BlogView extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Blog />
			</React.Fragment>
		)
	}
}

export default BlogView
