import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchGenreList, fetchDiscoverList } from './modules/actions/index'

import Menu from './modules/components/Menu'
import Item from './modules/components/Item'
import Search from './modules/components/Search'
import Pagination from './modules/components/Pagination'
import Movie from './modules/components/Movie'
import ErrorPage from './modules/components/ErrorPage'

import './assets/css/App.css'

class App extends Component {

    componentDidMount() {
		this.props.fetchGenreList()
		this.props.fetchDiscoverList()
    }

	render() {
        const { movies, genres } = this.props

		return (
		<div className="container">
			<div className="row">
				<Menu genres={genres}/>

				<section className="col col-content">
					<Search 
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        genres={genres}
                    />
					<Item 
						genres={genres}
						movies={movies}
					/>
				</section>

			</div>
		</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(App)