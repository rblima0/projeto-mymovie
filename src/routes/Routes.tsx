import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Menu } from '../pages/Menu'

export function Routes() {
  return (
    <Switch>
      <Redirect from="/" to="/dashboard" exact />
      <Route component={Menu} path="/dashboard" />
      <Redirect to="/not-found" />
    </Switch>
  )
}
