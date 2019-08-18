import React from 'react'

const Movie = (props) => {
    const { currentMovie } = props

    return (
        <div className="movie">

            <div className="movie-principal">
                <img src={`https://image.tmdb.org/t/p/w300${currentMovie.poster_path}`} alt={`${currentMovie.title}`} />
                <a href={`${currentMovie.homepage}`} target="__blank">Assistir trailer</a>
            </div>
            
            <h2>{currentMovie.title}</h2>

            {currentMovie.genres.map(movie => (
                <span key={movie.id}>{movie.name}</span>
            ))}
        
            <p>{currentMovie.overview}</p>

            <hr></hr>

            <p>Informações adicionais sobre o filme</p>

            <div className="movie-info">
                <p>Título Original: {`${currentMovie.original_title}`}</p>
                <p>Idioma Original: {`${currentMovie.spoken_languages[0].name}`}</p>
                <p>Data de Lançamento: {`${currentMovie.release_date}`}</p>
                <p>Duração: {`${currentMovie.runtime}`}</p>

                <br></br>

                <p>IMDB: {`${currentMovie.imdb_id}`}</p>
                <p>Avaliação: {`${currentMovie.vote_average}`}</p>
                <p>Quantidade de Avaliações: {`${currentMovie.vote_count}`}</p>
                <p>Popularidade: {`${currentMovie.popularity}`}</p>
                
                <br></br>

                <p>Orçamento: U$ {`${currentMovie.budget.toLocaleString('en-US')}`}</p>
                <p>Receita: U$ {`${currentMovie.revenue.toLocaleString('en-US')}`}</p>
            </div>
            
        </div>
    )
}
export default Movie