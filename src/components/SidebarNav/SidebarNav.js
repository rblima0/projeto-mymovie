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
  const { primaryMenu, secondaryMenu, className, ...rest } = props

  return (
    <>
      <List
        {...rest}
        className='sidebarnav'
      >
        {primaryMenu && primaryMenu.map(page => (
          <ListItem
            className='sidebarnav__item'
            disableGutters
            key={page.title}
          >
            <Button
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
      <div className='sidebarnav__submenu'>
        {secondaryMenu.map(page => (
          <div key={page.title}>
            <h4>{page.title}</h4>
            {page.id.map(result => (
              <ListItem
                className='sidebarnav__submenu__item'
                disableGutters
                key={result.value}
              >
                <Button
                  className='sidebarnav__submenu__button'
                  component={CustomRouterLink}
                  to={result.href}
                >
                  {result.value}
                </Button>
              </ListItem>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

SidebarNav.propTypes = {
  className: PropTypes.string,
  primaryMenu: PropTypes.array.isRequired,
  secondaryMenu: PropTypes.array
}

export { SidebarNav }
