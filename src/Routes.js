import React from 'react'
import { Switch, Redirect } from 'react-router-dom'

import { SimpleRoute } from './components/SimpleRoute/SimpleRoute'

import { Main as MainLayout } from './page/Main/Main'
import { Dashboard as DashboardView } from './page/Dashboard/Dashboard'

const Routes = () => {
  return (
    <Switch>
      <Redirect from="/" to="/dashboard" exact />
      <SimpleRoute
        component={DashboardView}
        layout={MainLayout}
        path="/dashboard"
        exact
      />
      <SimpleRoute
        component={DashboardView}
        layout={MainLayout}
        path="/genre/:movie_genre"
        exact
      />
      <Redirect to="/not-found" />
    </Switch>
  )
}

export default Routes
