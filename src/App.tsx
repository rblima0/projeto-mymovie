import React from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { Routes } from './routes/Routes'

import 'normalize.css'
import GlobalStyle from './styles/global'

const browserHistory = createBrowserHistory()

export default function App() {
  return (
    <Router history={browserHistory}>
      <GlobalStyle />
      <Routes />
    </Router>
  )
}
