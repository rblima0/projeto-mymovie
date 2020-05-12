import React from 'react'
import { Route } from 'react-router-dom'

interface RoutesProps {
  component: any
  layout: any
  path: string
  exact: boolean
}

export function SimpleRoute(props: RoutesProps) {
  const { layout: Layout, component: Component } = props

  return (
    <Route
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  )
}
