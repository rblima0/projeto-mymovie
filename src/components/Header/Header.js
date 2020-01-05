import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined'
import AccountIcon from '@material-ui/icons/AccountCircle'

import './Header.styl'

const Header = props => {
  const { className, onSidebarOpen, ...rest } = props

  const [notifications] = useState([])

  return (
    <AppBar {...rest} className="header">
      <Toolbar className={className}>
        <div className="header__info">
          <h2>Listagem de Filmes</h2>
          <p>Conheça melhor os filmes</p>
        </div>
        <div className="header__flexgrow" />
        <Hidden>
          <IconButton
            className="header__icon__button"
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
          <IconButton className="header__icon__button" color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <AccountIcon />
            </Badge>
          </IconButton>
          <IconButton className="header__icon__button" color="inherit">
            <NotificationsIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
}

export { Header }
