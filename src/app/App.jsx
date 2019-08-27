import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components'
import S from '../styles/constants'

import Router from './Routers'

const GlobalStyle = createGlobalStyle`
	html,body {
		margin: 0;
		padding: 0;
	}
	body {
		background-color: ${S.colorBackground};
		font-family: 'Montserrat', sans-serif;
	}
`

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<GlobalStyle />
				<Router />
			</React.Fragment>
		)
	}
}

export default App
