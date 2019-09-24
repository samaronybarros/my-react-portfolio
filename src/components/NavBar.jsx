import React, { Component } from 'react'
import { NavBarDiv, NavBarUl, NavBarLi, NavBarLink, NavBar3LineMenu } from '../styles/Navbar'

class NavBar extends Component {
	state = {
		show: false,
		icon: '☰',
	}

	openResponsiveNav = () => {
		const { show } = this.state

		this.setState({
			show: !show,
			icon: show ? '☰' : '⨯',
		})
	}

	render() {
		const { show, icon } = this.state
		return (
			<NavBarDiv show={show}>
				<NavBarUl show={show}>
					<NavBarLi show={show}>
						<NavBarLink href="/">Home</NavBarLink>
					</NavBarLi>
					<NavBarLi show={show}>
						<NavBarLink href="/curriculum">Curriculum</NavBarLink>
					</NavBarLi>
					<NavBarLi show={show}>
						<NavBarLink href="/blog">Blog</NavBarLink>
					</NavBarLi>
					<NavBarLi show={show}>
						<NavBarLink href="/contact">Contact</NavBarLink>
					</NavBarLi>
					<NavBar3LineMenu onClick={this.openResponsiveNav}>{icon}</NavBar3LineMenu>
				</NavBarUl>
			</NavBarDiv>
		)
	}
}

export default NavBar
