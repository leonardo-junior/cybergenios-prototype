// vendors
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    min-height: 100vh;
  }

  body.disable-scroll {
    overflow: hidden;
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export default GlobalStyle
