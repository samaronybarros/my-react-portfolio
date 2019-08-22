import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components'

import Curriculum from '../pages/Curriculum/container'

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
				<Curriculum />
			</React.Fragment>
		)
	}
}

export default App
