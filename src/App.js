import React from 'react'
import { Route } from 'react-router-dom'

//import * as MovieAPI from './utils/MovieAPI'
import { MOVIE_URL_LIST } from './utils/keys'

import Menu from './components/Menu'
import Search from './components/Search'
import Item from './components/Item'
import Movie from './components/Movie'

import './styles/css/App.css'

class App extends React.Component {

	constructor(props){
        super(props)
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
		return fetch(MOVIE_URL_LIST)
			.then(response => response.json())
			.then(json => json.results)
			.then(data => {
				console.log(data)
				this.setState(() => ({ movies: data }))
			})
			.catch(error => {
				console.error('Server Error', error)
			})
	}

	render() {

		if (!this.state.movies) {
			return <div>Loading...</div>
		}

		return (
		<div className="container">
			<div className="row">
				
				{/* COMPONENTE DO MENU LATERAL */}
				<Menu />
			
				<section className="col col-content">

					{/* COMPONENTE DE PESQUISA */}
					<Route path="/search" render={() => (
						<Search />
					)} />

					{/* COMPONENTE PRINCIPAL DE LISTA */}
					{this.state.movies.map(movie => (
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

export default App