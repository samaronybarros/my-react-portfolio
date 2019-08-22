import React, {Component} from 'react'
import Navbar from '../components/NavBar'
import { createGlobalStyle } from 'styled-components'

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
        <GlobalStyle></GlobalStyle>
        <Navbar></Navbar>
      </React.Fragment> 
    )
  }
}

export default App
