import React, { Component } from 'react'
import { MainDiv, MainH1 } from '../styles/Main'

import Breadcrumbs from './Breadcrumbs'
import Miniature from './Miniature'

import { posts } from '../data/blog'
class Blog extends Component {
	render() {
		return (
			<MainDiv>
				<Breadcrumbs name={'Blog'} />
				<MainH1>Blog</MainH1>

				{posts.map((post, index) => (
					<Miniature img={post.img} link={post.link} title={post.title} subtitle={post.subtitle} />
				))}
			</MainDiv>
		)
	}
}

export default Blog
