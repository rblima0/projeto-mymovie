import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { changeValue } from './modules/reducers/index'

import { MOVIE_GENRE_LIST, MOVIE_DISCOVER_LIST, MOVIE_SEARCH } from './config/constants'

import Menu from './components/Menu'
import Search from './components/Search'
import Item from './components/Item'
import Pagination from './components/Pagination'
import Movie from './components/Movie'
import ErrorPage from './components/ErrorPage'

import './assets/css/App.css'
import { fetchGenreList } from './modules/actions/index'

class App extends Component {
	constructor(props) {
		super(props)
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchGenreList())
    }
	
	render() {
        const { genres } = this.props

		return (
		<div className="container">
			<div className="row">
				
				<Menu genres={genres} />

			</div>
		</div>
		)
	}
}

function mapStateToProps(state) {
    const { genreListReducer } = state
    const { error, genres, isFetching } = genreListReducer

	return { error, genres, isFetching }
}

/* function mapDispatchToProps(dispatch) {
	return fetchGenreList({ changeValue }, dispatch)
} */

export default connect(mapStateToProps)(App)