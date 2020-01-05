import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import './Card.styl'

const Card = props => {
  const { movie, genres } = props

  const limitOverview = (overview, caracteres = 280, end = '...') => {
    if (overview.length > caracteres) {
      return overview.substring(0, caracteres - end.length) + end
    }
    return overview
  }

  return (
    <div key={movie.id} className="card">
      <div className="card__item">
        <Link to={`/movie/${movie.id}`} onClick={() => null}>
          <img
            src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
            alt={`${movie.title}`}
          />
        </Link>
        <Link to={`/movie/${movie.id}`} onClick={() => null}>
          <h3>{movie.title}</h3>
        </Link>
        {movie.genre_ids.map(genre => (
          <span key={genre}>
            {(genres && genres.find(({ id }) => id === genre).name) || ''}
          </span>
        ))}
        <p>{limitOverview(movie.overview) || 'Sem descrição'}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  movie: PropTypes.object,
  genres: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
}

export { Card }
