import React from 'react'

import Menu from './modules/components/Menu'
import Item from './modules/components/Item'
import Search from './modules/components/Search'
import Pagination from './modules/components/Pagination'
import Movie from './modules/components/Movie'
import ErrorPage from './modules/components/ErrorPage'

import './assets/css/App.css'

const App = () => {
	return (
		<div className="container">
			<div className="row">
				<Menu/>

				<section className="col col-content">
					<Item/>
				</section>

			</div>
		</div>
	)
}

export default App