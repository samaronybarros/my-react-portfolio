import React, { Component } from 'react'

import { CodeBlockDiv, CodeBlockCode } from '../styles/CodeBlock'

class CodeBlock extends Component {
	render() {
		const { children } = this.props
		return (
			<CodeBlockDiv>
				<CodeBlockCode>{children}</CodeBlockCode>
			</CodeBlockDiv>
		)
	}
}

export default CodeBlock
