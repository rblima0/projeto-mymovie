import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Item from './Item'

import { fetchSearchMovieList } from '../../modules/actions/index'

class Search extends Component {
    constructor(props) {
        super(props)

        this.state = { search: '' }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
		this.props.fetchSearchMovieList(this.state.search)
	}

	handleChange(e) {
		this.setState({ search: e.target.value })
    }
    
    render() {
        const { movies, genres } = this.props

        return(
            <Fragment>
                <section className="search">
                    <form action="" onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Faça sua pesquisa..." onChange={this.handleChange} />
                    </form>
                </section>
                <Item 
                    movies={movies}
                    genres={genres} 
                />
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({ 
    movies: state.searchListReducer.movies,
	results: state.searchListReducer.results,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchSearchMovieList
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Search)