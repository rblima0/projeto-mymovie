import React, { forwardRef } from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import { List, ListItem, Button } from '@material-ui/core'
import MovieIcon from '@material-ui/icons/Movie'

import './SidebarNav.styl'

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <RouterLink {...props} />
  </div>
))

const SidebarNav = props => {
  const { genres } = props

  return (
    <>
      <List className="sidebarnav">
        <ListItem className="sidebarnav__item" disableGutters>
          <Button
            className="sidebarnav__item__button"
            component={CustomRouterLink}
            to="/dashboard"
          >
            <div className="sidebarnav__item__icon">
              <MovieIcon />
            </div>
            MyMovies
          </Button>
        </ListItem>
      </List>
      <div className="sidebarnav__submenu">
        <h4>Gêneros</h4>
        {genres &&
          genres.map(genre => (
            <ListItem
              className="sidebarnav__submenu__item"
              disableGutters
              key={genre.id}
            >
              <Button
                className="sidebarnav__submenu__button"
                component={CustomRouterLink}
                to={`/genre/${genre.id}`}
              >
                {genre.name}
              </Button>
            </ListItem>
          ))}
      </div>
    </>
  )
}

SidebarNav.propTypes = {
  genres: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
}

export { SidebarNav }
