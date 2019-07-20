import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { MOVIE_DISCOVER_LIST, MOVIE_GENRE_LIST } from '../api'

import Menu from '../components/Menu'
import Search from '../components/Search'
import Item from '../components/Item'
import Movie from '../components/Movie'

import '../styles/css/App.css'

export default class App extends Component {
	constructor(props) {
		super(props)

		this.state = { 
			movies: [], 
			genres: [],
			movie_search: ''
		}

		this.api_key = process.env.REACT_APP_API_KEY

		this.fetchMovieList = this.fetchMovieList.bind(this)
		this.fetchGenreList = this.fetchGenreList.bind(this)
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
				this.setState(() => ({ genres: data }))
			})
			.catch(error => {
				console.error('Server Error', error)
			})
	}

	fetchMovieList() {
		return fetch(MOVIE_DISCOVER_LIST)
			.then(response => response.json())
			.then(json => json.results)
			.then(data => {
				this.setState(() => ({ movies: data }))
			})
			.catch(error => {
				console.error('Server Error', error)
			})
	}

	handleSubmit(e) {
		const { movie_search } = this.state

		e.preventDefault()
		return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&language=pt-BR&query=${movie_search}&page=1&include_adult=false`)
			.then(response => response.json())
			.then(json => json.results)
			.then(data => {
				this.setState(() => ({ movies: data }))
			})
			.catch(error => {
				console.error('Server Error', error)
			})
	}

	handleChange(e) {
		this.setState({ movie_search: e.target.value })
	}

	render() {
		const { movies, genres } = this.state

		return (
		<div className="container">
			<div className="row">
				
				<Menu genres={genres} />
			
				<section className="col col-content">

					<Search 
						handleSubmit={this.handleSubmit}
						handleChange={this.handleChange} 
					/>

					<Item movies={movies} genres={genres} />

					{/* COMPONENTE DE CARACTERISTICAS DO FILME */}
					{/* <Route exact path="/movie/:movie_id" render={(props) => (
						<Movie />
					)} /> */}
		
				</section>

			</div>
		</div>
		)
	}
}