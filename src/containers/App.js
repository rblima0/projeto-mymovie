import React, { Component } from 'react'
import { Route } from 'react-router-dom'

//import * as MovieAPI from './utils/MovieAPI'
import { MOVIE_URL_LIST, MOVIE_GENRE_LIST } from '../api'

import Menu from '../components/Menu'
import Search from '../components/Search'
import Item from '../components/Item'
import Movie from '../components/Movie'

import '../styles/css/App.css'

export default class App extends Component {

	constructor(props) {
		super(props)
		this.state = { movies: [], genres: [] }

		this.fetchMovieList = this.fetchMovieList.bind(this)
		this.fetchGenreList = this.fetchGenreList.bind(this)
	}

    componentDidMount() {
		this.fetchMovieList()
		this.fetchGenreList()
	}

	fetchMovieList() {
		return fetch(MOVIE_URL_LIST)
			.then(response => response.json())
			.then(json => json.results)
			.then(data => {
				//console.log(data)
				this.setState(() => ({ movies: data }))
			})
			.catch(error => {
				console.error('Server Error', error)
			})
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


	render() {
		
		const { movies, genres } = this.state

		return (
		<div className="container">
			<div className="row">
				
				{/* COMPONENTE DO MENU LATERAL */}
				<Menu genres={genres} />
			
				<section className="col col-content">

					{/* COMPONENTE DE PESQUISA */}
					<Route path="/search" render={() => (
						<Search />
					)} />

					{/* COMPONENTE PRINCIPAL DE LISTA */}
					{movies.map(movie => (
						<Item key={movie.id} movie={movie} />
					))}

					{/* COMPONENTE DE CARACTERISTICAS DO FILME */}
					<Route path="/movie" render={(props) => (
						<Movie />
					)} />
		
				</section>

			</div>
		</div>
		)
	}
}