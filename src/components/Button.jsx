import React, { Component } from 'react'
import { ButtonStyle } from '../styles/Button'

class Button extends Component {
	render() {
		const { onClick, children } = this.props
		return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>
	}
}

export default Button
