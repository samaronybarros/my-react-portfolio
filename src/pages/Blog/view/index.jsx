import React, { Component } from 'react'
import Navbar from '../../../components/NavBar'
import { MainDiv, MainH1 } from '../../../styles/Main'
import Breadcrumbs from '../../../components/Breadcrumbs'
import Miniature from '../../../components/Miniature'

import { posts } from '../../../data/blog'

class BlogView extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<MainDiv>
					<Breadcrumbs name={'Blog'} />
					<MainH1>Blog</MainH1>

					{posts.map((post, index) => (
						<Miniature img={post.img} link={post.link} title={post.title} subtitle={post.subtitle} />
					))}
				</MainDiv>
			</React.Fragment>
		)
	}
}

export default BlogView
