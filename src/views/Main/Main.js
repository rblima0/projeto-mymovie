import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Header } from '../../components/Header/Header'
import { Sidebar } from '../../components/Sibebar/Sidebar'

import { primaryMenu, secondaryMenu } from './Helper'

import './Main.styl'

const Main = props => {
  const { children } = props

  const [openSidebar, setOpenSidebar] = useState(true)

  const handleSidebar = () => {
    setOpenSidebar(!openSidebar)
  }

  return (
    <div className='main'>
      <Header
        className={openSidebar ?
          'main__header__open' : ''}
        onSidebarOpen={handleSidebar} />
      <Sidebar
        open={openSidebar}
        primaryMenu={primaryMenu}
        secondaryMenu={secondaryMenu}
        variant='persistent'
      />
      <main className={openSidebar ?
        'main__content__open' : 'main__content__close'}>
        {children}
      </main>
    </div>
  )
}

Main.propTypes = {
  children: PropTypes.node
}

export { Main }
