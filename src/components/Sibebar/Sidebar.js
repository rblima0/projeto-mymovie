import React from 'react'
import PropTypes from 'prop-types'

import { Drawer } from '@material-ui/core'
import { SidebarNav } from './SidebarNav/SidebarNav'

import './Sidebar.styl'

const Sidebar = props => {
  const { open, variant, onClose, className, genres, ...rest } = props

  return (
    <Drawer
      open={open}
      onClose={onClose}
      variant={variant}
      classes={{ paper: 'sidebar__drawer' }}
      anchor="left"
    >
      <div {...rest} className="sidebar">
        <SidebarNav className="sidebar__nav" genres={genres} />
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
  genres: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
}

export { Sidebar }
