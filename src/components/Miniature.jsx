import React, { Component } from 'react'
import { Miniature, MiniatureLink, BlackBox, BlackBoxText, BlackBoxTextH1, BlackBoxTextH2 } from '../styles/Main'

class MiniatureComponent extends Component {
	render() {
		const { img, link, title, subtitle } = this.props
		return (
			<Miniature img={img}>
				<MiniatureLink href={link}>
					<BlackBox>
						<BlackBoxText>
							<BlackBoxTextH1>{title}</BlackBoxTextH1>
							<BlackBoxTextH2>{subtitle}</BlackBoxTextH2>
						</BlackBoxText>
					</BlackBox>
				</MiniatureLink>
			</Miniature>
		)
	}
}

export default MiniatureComponent
