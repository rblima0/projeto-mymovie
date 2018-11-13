import React from 'react'
import { Route } from 'react-router-dom';
// import * as MovieAPI from './utils/MovieAPI'
import Menu from './components/Menu';
import Search from './components/Search';
import Item from './components/Item';
import Movie from './components/Movie';
import './styles/css/App.css';

class App extends React.Component {

	state = {
		
	}

	componentDidMount() {

	}

	render() {
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
					<Route exact path='/' render={() => (
						<Item />
					)} />

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