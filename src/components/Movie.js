import React from 'react'

const Movie = (props) => {
    const { genres, currentMovie } = props

    return (
        <div className="movie">

            <div className="movie-principal">
                <img src={`https://image.tmdb.org/t/p/w300${currentMovie.poster_path}`} alt={`${currentMovie.title}`} />
                <a href="">Assistir trailer</a>
            </div>
            
            <h2>{currentMovie.title}</h2>
            {currentMovie.genre_ids.map(item => (
                <span key={item}>{genres.find(({ id }) => id === item).name || ''}</span>
            ))}
        
            <p>{currentMovie.overview}</p>

            <hr></hr>

            <p>Informações adicionais sobre o filme</p>

            <div className="movie-info">
                <p>Título Original: {`${currentMovie.original_title}`}</p>
                <p>Idioma Original: {`${currentMovie.original_language}`}</p>
                <p>Duração: 2h 8m</p>
                <p>Avaliação: 65%</p><br></br>
                <p>Orçamento: R$ 170,000,000.00</p>
                <p>Receita: R$ 1,303,459,585.00</p>
            </div>
            
        </div>
    )
}
export default Movie