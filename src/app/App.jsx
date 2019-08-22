import React, {Component} from 'react'
import Navbar from '../components/NavBar'
import Cover from '../components/Cover'
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
        <Navbar />
        <Cover />
      </React.Fragment> 
    )
  }
}

export default App
