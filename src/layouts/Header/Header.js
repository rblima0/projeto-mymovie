import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined'
import InputIcon from '@material-ui/icons/Input'
import LocalMovies from '@material-ui/icons/LocalMovies'

import './Header.styl'

const Header = props => {
  const { className, onSidebarOpen, ...rest } = props

  const [notifications] = useState([])

  return (
    <AppBar
      {...rest}
      className="header"
    >
      <Toolbar>
        <RouterLink
          className='header__logo'
          to="/">
          <LocalMovies /><span>MyMovies</span>
        </RouterLink>
        <div className="header__flexgrow" />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            className="header__sign_out_button"
            color="inherit"
          >
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
}

export { Header }
