import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import { fetchGenreList } from '../actions/index'

class Menu extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { fetchGenreList } = this.props
        
        fetchGenreList()
    }

    render() {
        const { genres } = this.props
        
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

const mapStateToProps = state => ({ 
    genres: state.genreListReducer.genres
})

const mapDispatchToProps = dispatch => bindActionCreators({ 
    fetchGenreList 
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Menu)