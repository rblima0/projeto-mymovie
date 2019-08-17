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

const App = () => {
	return (
		<div className="container">
			<div className="row">
				
				<Menu/>

			</div>
		</div>
	)
}

export default App