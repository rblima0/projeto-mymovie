import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Item extends Component {
    constructor(props) {
        super(props)

        this.limitMovieOverview = this.limitMovieOverview.bind(this)
    }

    limitMovieOverview(overview, len = 280, end = '...') {
		if (overview.length > len) {
			return overview.substring(0, len - end.length) + end
		} 
		return overview
	}

    render() {
        const { movies, results, genres } = this.props

        return (
            movies.map((movie) => (
                <div key={movie.id} className="item">
                    <Link to={`/movie/${movie.id}`} /*onClick={() => fetchMovieInfo(movie.id)}*/>
                        <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={`${movie.title}`} />
                    </Link>
                    <Link to={`/movie/${movie.id}`} /*onClick={() => fetchMovieInfo(movie.id)}*/><h3>{movie.title}</h3></Link>
                    {movie.genre_ids.map(item => (
                        <span key={item}>{genres.find(({ id }) => id === item).name || ''}</span>
                    ))}
                    <p>{this.limitMovieOverview(movie.overview)}</p>
                </div>
            ))
        )
    }
}

export default Item