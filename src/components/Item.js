import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
        
    const { movie } = props
    
    return (
        <div className="item">
            <Link to={`/movie`}>
                <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={`${movie.title}`} />
            </Link>
            <Link to={`/movie`}><h3>{movie.title}</h3></Link>
            <span>Ação</span><span>Aventura</span><span>Ficção Científica</span>
            <p>{movie.overview}</p>
        </div>
    )
}
export default Item