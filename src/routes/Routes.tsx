import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Menu } from '../pages/Menu'

export function Routes() {
  return (
    <Switch>
      <Route component={Menu} path="/dashboard" />
    </Switch>
  )
}
