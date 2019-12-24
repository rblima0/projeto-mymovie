import React, { PureComponent } from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Routes from './Routes'

import './styles/base.styl'

const browserHistory = createBrowserHistory()

export default class App extends PureComponent {
  render() {
    return (
      <Router history={browserHistory}>
        <Routes />
      </Router>
    )
  }
}
