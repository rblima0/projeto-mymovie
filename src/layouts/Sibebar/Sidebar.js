import React from 'react'
import PropTypes from 'prop-types'

import { Drawer } from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard'

import { SidebarNav } from './components/SidebarNav/SidebarNav'

import './Sidebar.styl'

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props

  const pages = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <DashboardIcon />
    }
  ]

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      variant={variant}
      classes={{ paper: 'sidebar__drawer' }}
    >
      <div
        {...rest}
        className='sidebar'
      >
        <SidebarNav
          className='sidebar__nav'
          pages={pages}
        />
      </div>
    </Drawer>
  )
}

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
}

export { Sidebar }
