import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { MOVIE_GENRE_LIST } from '../api'

import Menu from '../components/Menu'
import Search from '../components/Search'
import Item from '../components/Item'
import Pagination from '../components/Pagination'
//import Movie from '../components/Movie'

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
			movie: null
		}

		this.api_key = process.env.REACT_APP_API_KEY
		this.fetchGenreList = this.fetchGenreList.bind(this)
		this.fetchMovieList = this.fetchMovieList.bind(this)
		this.fetchPaginateList = this.fetchPaginateList.bind(this)
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

	render() {
		const { movies, genres, results, currentPage } = this.state
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
						<Item movies={movies} genres={genres} />
					)} />

					{ results > 20 && 
						<Pagination 
							fetchPaginateList={this.fetchPaginateList}
							currentPage={currentPage}
							pages={numberPages} 
						/>
					}
					
					{/* <Route exact path="/genre/:genre_id" render={(props) => (
						<Item movies={movies} genres={genres} />
					)} /> */}

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