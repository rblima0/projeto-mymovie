import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { searchGenreList } from '../../services/TheMovieAPI'

import { Header } from '../../components/Header/Header'
import { Sidebar } from '../../components/Sibebar/Sidebar'

import './Main.styl'

const Main = props => {
  const { children } = props

  const [genres, setGenres] = useState('')
  const [openSidebar, setOpenSidebar] = useState(true)

  async function fetchMyAPI() {
    setGenres(await searchGenreList())
  }

  const handleSidebar = () => {
    setOpenSidebar(!openSidebar)
  }

  useEffect(() => {
    fetchMyAPI()
  }, [])

  return (
    <div className="main">
      <Header
        className={openSidebar ? 'main__header__open' : ''}
        onSidebarOpen={handleSidebar}
      />
      <Sidebar open={openSidebar} genres={genres} variant="persistent" />
      <main
        className={openSidebar ? 'main__content__open' : 'main__content__close'}
      >
        {children}
      </main>
    </div>
  )
}

Main.propTypes = {
  children: PropTypes.node,
}

export { Main }
