import React from 'react'
import PropTypes from 'prop-types'

import { Drawer } from '@material-ui/core'
import { SidebarNav } from '../SidebarNav/SidebarNav'

import './Sidebar.styl'

const Sidebar = props => {
  const { open, variant, onClose, className, primaryMenu, secondaryMenu, ...rest } = props

  return (
    <Drawer
      open={open}
      onClose={onClose}
      variant={variant}
      classes={{ paper: 'sidebar__drawer' }}
      anchor="left"
    >
      <div
        {...rest}
        className='sidebar'
      >
        <SidebarNav
          className='sidebar__nav'
          primaryMenu={primaryMenu}
          secondaryMenu={secondaryMenu}
        />
      </div>
    </Drawer>
  )
}

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
  primaryMenu: PropTypes.array,
  secondaryMenu: PropTypes.array
}

export { Sidebar }
