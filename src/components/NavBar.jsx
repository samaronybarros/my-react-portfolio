import React, { Component } from 'react'
import { NavBarDiv, NavBarUl, NavBarLi, NavBarLink } from '../styles/Navbar'

class NavBar extends Component {
	render() {
		return (
			<NavBarDiv>
				<NavBarUl>
					<NavBarLi>
						<NavBarLink href="/">Home</NavBarLink>
					</NavBarLi>
					<NavBarLi>
						<NavBarLink href="/curriculum">Curriculum</NavBarLink>
					</NavBarLi>
					<NavBarLi>
						<NavBarLink href="/blog">Blog</NavBarLink>
					</NavBarLi>
					<NavBarLi>
						<NavBarLink href="/contact">Contact</NavBarLink>
					</NavBarLi>
				</NavBarUl>
			</NavBarDiv>
		)
	}
}

export default NavBar
