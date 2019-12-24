import React from 'react'
import { Switch, Redirect } from 'react-router-dom'

import { RouteWithLayout } from './components/RouteWithLayout/RouteWithLayout'
import { Main as MainLayout } from './layouts/Main'
import { Dashboard as DashboardView } from './views/Dashboard'

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        component={DashboardView}
        layout={MainLayout}
        path="/dashboard"
        exact
      />
      <Redirect to="/not-found" />
    </Switch>
  )
}

export default Routes
