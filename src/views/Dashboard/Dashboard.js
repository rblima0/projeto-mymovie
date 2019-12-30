import React from 'react'
import Container from '@material-ui/core/Container'
import { Card } from '../../components/Card/Card'

import './Dashboard.styl'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Container maxWidth="lg">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Container>
    </div>
  )
}

export { Dashboard }
