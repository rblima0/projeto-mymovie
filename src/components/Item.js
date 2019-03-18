import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Item extends Component {

    render() {
        
        const { movie } = this.props
        
        return (
            <div className="item">
                <Link to={`/movie`}>
                    <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={`${movie.title}`} />
                </Link>
                <Link to={`/movie`}>
                    <h3>{movie.title}</h3>
                </Link>
                <span>Ação</span><span>Aventura</span><span>Ficção Científica</span>
                
                <p>{movie.overview}</p>
                <p>Mais informações necessárias</p>
            </div>
        )
    }
}

/* props - guarda todos os parametros enviados para esse componente */
