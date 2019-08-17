import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchGenreList } from '../modules/actions/index'

import { Link } from 'react-router-dom'

class Menu extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { fetchGenreList } = this.props
        fetchGenreList()
    }

    render() {
        const { genreList: { genres, isFetching, error } } = this.props
        
        return (
            <section className="col col-sidebar">
                <div className="menu-trigger" id="menu-trigger">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <nav className="menu-hidde" id="menu-hidde">
                    <img src="img/mymovies-logo.svg" alt="Logo MyMovies" />
                    <span>Menu Principal</span>
                    <ul>
                        <li><a href="/">Lançamentos</a></li>
                        <li><a href="/">Próximas estreias</a></li>
                        <li><a href="/">Populares</a></li> 
                        <li><a href="/">Bem avaliados</a></li>
                        <li><a href="/">Pessoas</a></li>
                    </ul>
                    <span>Gêneros</span>
                    <ul>
                        {genres.map(genre => (
                            <li key={genre.id}>
                                <Link to={`/genre/${genre.id}`}>{genre.name}</Link>
                            </li>
                        ))}
                    </ul> 
                </nav>
            </section>
        )
    }
}

const mapStateToProps = state => ({ genreList: state.genreListReducer })
const mapDispatchToProps = dispatch => bindActionCreators({ fetchGenreList }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Menu)