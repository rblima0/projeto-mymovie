import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    font-family: 'Overpass', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #1b1e23;
    color: #fff;
  }

  body,
  input,
  button {
    font-size: 0.875rem;
    font-family: 'Overpass', sans-serif;
  }

  button {
    cursor: pointer;
  }
`
