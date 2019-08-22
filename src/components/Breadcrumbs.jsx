import React, { Component } from 'react'
import { BreadCrumbsUl, BreadCrumbsLi, BreadCrumbsLink } from '../styles/Breadcrumbs'

class Breadcrumbs extends Component {
	render() {
		const { name } = this.props
		return (
			<BreadCrumbsUl>
				<BreadCrumbsLi>
					<BreadCrumbsLink href="/">Home</BreadCrumbsLink>
				</BreadCrumbsLi>
				<BreadCrumbsLi>></BreadCrumbsLi>
				<BreadCrumbsLi>{name}</BreadCrumbsLi>
			</BreadCrumbsUl>
		)
	}
}

export default Breadcrumbs
