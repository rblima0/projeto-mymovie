import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Dashboard } from '../pages/Dashboard'

export function InternalRoutes() {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  )
}
