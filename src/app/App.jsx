import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components'

import Router from './Routers'

const GlobalStyle = createGlobalStyle`
	html,body {
		margin: 0;
		padding: 0;
	}
	body {
		background-color: #2b2b2b;
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
