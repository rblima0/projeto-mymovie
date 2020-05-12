import React from 'react'
import { Switch, Redirect } from 'react-router-dom'

import { SimpleRoute } from './components/SimpleRoute'

import { Menu } from './pages/Menu'
import { Dashboard } from './pages/Dashboard'

export function Routes() {
  return (
    <Switch>
      <Redirect from="/" to="/dashboard" exact />
      <SimpleRoute
        component={Dashboard}
        layout={Menu}
        path="/dashboard"
        exact
      />
      <Redirect to="/not-found" />
    </Switch>
  )
}
