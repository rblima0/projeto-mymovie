import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { MOVIE_GENRE_LIST } from '../api'

import Menu from '../components/Menu'
import Search from '../components/Search'
import Item from '../components/Item'
import Pagination from '../components/Pagination'
import Movie from '../components/Movie'
import ErrorPage from '../components/ErrorPage'

import '../styles/css/App.css'

export default class App extends Component {
	constructor(props) {
		super(props)

		this.state = { 
			movies: [], 
			genres: [],
			movieSearch: '',
			results: 0,
			currentPage: 1,
			currentMovie: null
		}

		this.api_key = process.env.REACT_APP_API_KEY
		this.fetchGenreList = this.fetchGenreList.bind(this)
		this.fetchMovieList = this.fetchMovieList.bind(this)
		this.fetchPaginateList = this.fetchPaginateList.bind(this)
		this.fetchMovieInfo = this.fetchMovieInfo.bind(this)
		this.limitMovieOverview = this.limitMovieOverview.bind(this)
		this.closeMovieInfo = this.closeMovieInfo.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

    componentDidMount() {
		this.fetchGenreList()
		this.fetchMovieList()
	}

	fetchGenreList() {
		return fetch(MOVIE_GENRE_LIST)
			.then(response => response.json())
			.then(json => json.genres)
			.then(data => {
				//console.log(data)
				this.setState(() => ({ genres: data }))
			})
			.catch(error => {
				console.error('Server Error', error)
			})
	}

	fetchMovieList() {
		return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${this.api_key}&language=pt-BR&sort_by=popularity.desc`)
			.then(data => data.json())
			.then(data => {
				//console.log(data)
				this.setState(() => ({ movies: data.results, results: data.total_results }))
			})
			.catch(error => {
				console.error('Server Error', error)
			})
	}

	fetchPaginateList(page) {
		const { movieSearch } = this.state

		if(movieSearch) {
			return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&language=pt-BR&query=${movieSearch}&include_adult=false&page=${page}`)
				.then(response => response.json())
				.then(json => json.results)
				.then(data => {
					//console.log(data)
					this.setState(() => ({ movies: data, currentPage: page }))
				})
				.catch(error => {
					console.error('Server Error', error)
				})
		} else {
			return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${this.api_key}&language=pt-BR&sort_by=popularity.desc&page=${page}`)
				.then(data => data.json())
				.then(data => {
					//console.log(data)
					this.setState(() => ({ movies: data.results, results: data.total_results, currentPage: page }))
				})
				.catch(error => {
					console.error('Server Error', error)
				})
		}		
	}

	handleSubmit(e) {
		const { movieSearch } = this.state

		e.preventDefault()
		return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&language=pt-BR&query=${movieSearch}&include_adult=false`)
			.then(data => data.json())
			.then(data => {
				//console.log(data)
				this.setState(() => ({ movies: data.results, results: data.total_results }))
			})
			.catch(error => {
				console.error('Server Error', error)
			})
	}

	handleChange(e) {
		if(!e.target.value) {
			this.fetchMovieList()
		}
		this.setState({ movieSearch: e.target.value })
	}

	fetchMovieInfo(id) {
		const { movies } = this.state

		let filterMovie
		movies.forEach((movie, i) => {
			if(movie.id === id) {
				filterMovie = movie
			}
		})

		window.scrollTo(0, 0)

		this.setState({ currentMovie: filterMovie })  
	}

	closeMovieInfo() {
		this.setState({ currentMovie: null })
	}

	limitMovieOverview(overview, len = 280, end = '...') {
		if (overview.length > len) {
			return overview.substring(0, len - end.length) + end
		} 
		return overview
	}
	
	render() {
		const { movies, genres, results, currentPage, currentMovie } = this.state
		const numberPages = Math.floor(results / 20)

		return (
		<div className="container">
			<div className="row">
				
				<Menu genres={genres} />
			
				<section className="col col-content">

					<Route exact path="/" render={(props) => (
						<Search 
							handleSubmit={this.handleSubmit}
							handleChange={this.handleChange} 
						/>
					)} />

					<Route exact path="/" render={(props) => (
						<Item 
							genres={genres} 
							movies={movies} 
							fetchMovieInfo={this.fetchMovieInfo}
							currentMovie={currentMovie}
							limitMovieOverview={this.limitMovieOverview}
						/>
					)} />

					<Route exact path="/movie/:movie_id" render={(props) => (
						currentMovie ?
						<Movie 
							closeMovieInfo={this.closeMovieInfo}
							currentMovie={currentMovie}
							genres={genres}
						/> :
						<ErrorPage/>
					)} />	

					<Route exact path="/" render={(props) => (
						results > 20 && 
						<Pagination 
							fetchPaginateList={this.fetchPaginateList}
							currentPage={currentPage}
							pages={numberPages} 
						/>
					)} />
					
					{/* <Route exact path="/genre/:genre_id" render={(props) => (
						<Item movies={movies} genres={genres} />
					)} /> */}
				</section>

			</div>
		</div>
		)
	}
}