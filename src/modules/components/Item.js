import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import { fetchGenreList, fetchDiscoverList } from '../actions/index'

class Item extends Component {
    constructor(props) {
        super(props)

        this.limitMovieOverview = this.limitMovieOverview.bind(this)
    }

    componentDidMount() {
        const { fetchGenreList, fetchDiscoverList  } = this.props

        fetchGenreList()
        fetchDiscoverList()
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

const mapStateToProps = state => ({ 
    movies: state.discoverListReducer.movies,
    results: state.discoverListReducer.results,
    genres: state.genreListReducer.genres
})

const mapDispatchToProps = dispatch => bindActionCreators({ 
    fetchDiscoverList, 
    fetchGenreList 
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Item)