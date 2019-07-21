import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
    const { movies = [], genres } = props
    
    return (
        movies.map((movie) => (
            <div key={movie.id} className="item">
                <Link to={`/movie/${movie.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={`${movie.title}`} />
                </Link>
                <Link to={`/movie/${movie.id}`}><h3>{movie.title}</h3></Link>
                {movie.genre_ids.map(item => (
                    <span key={item}>{genres.find(({ id }) => id === item).name || ''}</span>
                ))}
                <p>{movie.overview}</p>
            </div>
        ))
    )
}
export default Item