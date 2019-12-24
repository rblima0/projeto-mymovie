import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Header } from './Header/Header'
import { Sidebar } from './Sibebar/Sidebar'

import './Main.styl'

const Main = props => {
  const { children } = props

  const [openSidebar, setOpenSidebar] = useState(true)

  const handleSidebar= () => {
    setOpenSidebar(!openSidebar)
  }

  return (
    <div className='main'>
      <Header onSidebarOpen={handleSidebar} />
      <Sidebar
        open={openSidebar}
        variant='persistent'
      />
      <main className='main__content'>
        {children}
      </main>
    </div>
  )
}

Main.propTypes = {
  children: PropTypes.node
}

export { Main }
