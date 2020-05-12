import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Dashboard } from '../pages/Dashboard'

export function InternalRoutes() {
  return (
    <Switch>
      <Redirect from="/" to="/dashboard" exact />
      <Route path="/dashboard" component={Dashboard} />
      <Redirect to="/not-found" />
    </Switch>
  )
}
