import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components'

import Home from '../pages/Home/container'

const GlobalStyle = createGlobalStyle`
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
				<Home />
			</React.Fragment>
		)
	}
}

export default App
