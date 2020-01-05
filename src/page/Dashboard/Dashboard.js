import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Container from '@material-ui/core/Container'
import { Card } from '../../components/Card/Card'

import { searchMovieList, searchGenreList } from '../../services/TheMovieAPI'

import './Dashboard.styl'

const Dashboard = props => {
  const { match } = props

  const [movies, setMovies] = useState('')
  const [genres, setGenres] = useState('')

  async function fetchMyAPI() {
    setMovies(await searchMovieList(match.params.movie_genre))
    setGenres(await searchGenreList())
  }

  useEffect(() => {
    fetchMyAPI()
  }, [match.params.movie_genre])

  return (
    <div className="dashboard">
      <Container maxWidth="lg">
        {movies &&
          movies.results.map(movie => (
            <Card key={movie.id} movie={movie} genres={genres} />
          ))}
      </Container>
    </div>
  )
}

Dashboard.propTypes = {
  match: PropTypes.object,
}

export { Dashboard }
