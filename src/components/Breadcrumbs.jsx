import React, { Component } from 'react'
import { BreadCrumbsUl, BreadCrumbsLi, BreadCrumbsLink } from '../styles/Breadcrumbs'

class Breadcrumbs extends Component {
	render() {
		const { name, blog } = this.props
		return (
			<BreadCrumbsUl>
				<BreadCrumbsLi>
					<BreadCrumbsLink href="/">Home</BreadCrumbsLink>
				</BreadCrumbsLi>
				<BreadCrumbsLi>></BreadCrumbsLi>
				{blog && (
					<React.Fragment>
						<BreadCrumbsLi>
							<BreadCrumbsLink href="/blog">Blog</BreadCrumbsLink>
						</BreadCrumbsLi>
						<BreadCrumbsLi>></BreadCrumbsLi>
					</React.Fragment>
				)}
				<BreadCrumbsLi>{name}</BreadCrumbsLi>
			</BreadCrumbsUl>
		)
	}
}

export default Breadcrumbs
