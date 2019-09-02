import React, { Component } from 'react'
import { MainBlogPictureDivCenter, MainBlogPicture } from '../styles/Main'

class BlogPicture extends Component {
	render() {
		const { img, small, medium, large } = this.props
		let size = ''

		switch (true) {
			case small:
				size = '25%'
				break
			case medium:
				size = '50%'
				break
			case large:
			default:
				size = '100%'
				break
		}

		return (
			<MainBlogPictureDivCenter>
				<MainBlogPicture src={img} size={size} />
			</MainBlogPictureDivCenter>
		)
	}
}

export default BlogPicture
