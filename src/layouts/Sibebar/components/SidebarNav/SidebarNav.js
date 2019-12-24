/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { forwardRef } from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import { List, ListItem, Button } from '@material-ui/core'

import './SidebarNav.styl'

const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{ flexGrow: 1 }}
  >
    <RouterLink {...props} />
  </div>
))

const SidebarNav = props => {
  const { pages, className, ...rest } = props

  return (
    <List
      {...rest}
      className='sidebarnav'
    >
      {pages.map(page => (
        <ListItem
          className='sidebarnav__item'
          disableGutters
          key={page.title}
        >
          <Button
            activeClassName='sidebarnav__item__active'
            className='sidebarnav__item__button'
            component={CustomRouterLink}
            to={page.href}
          >
            <div className='sidebarnav__item__icon'>{page.icon}</div>
            {page.title}
          </Button>
        </ListItem>
      ))}
    </List>
  )
}

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired
}

export { SidebarNav }
