import React from 'react'

const Movie = (props) => {
    return (
        <div className="movie">

            <div className="movie-principal">
                <img src="img/1-1.jpg" alt="Movie" />
                <a href="">Assistir trailer</a>
            </div>
            
            <h2>Jurassic World: O Reino está Ameaçado (2018)</h2>
            <span>Ação</span><span>Aventura</span><span>Ficção Científica</span>
            
            <p>Quatro anos após o fechamento do Jurassic World, um vulcão prestes a entrar em erupção põe em risco a vida na ilha Nublar. No local não há mais qualquer presença humana, com os dinossauros vivendo livremente. Diante da situação, é preciso tomar uma decisão: deve-se retornar à ilha para salvar os animais ou abandoná-los para uma nova extinção? Decidida a resgatá-los, Claire (Bryce Dallas Howard) convoca Owen (Chris Pratt) a retornar à ilha com ela.</p>

            <hr></hr>

            <p>Informações adicionais sobre o filme</p>

            <div className="movie-info">
                <p>Título Original: Jurrassic World: Fallen Kingdom</p>
                <p>Idioma Original: Inglês</p>
                <p>Duração: 2h 8m</p>
                <p>Avaliação: 65%</p><br></br>
                <p>Orçamento: R$ 170,000,000.00</p>
                <p>Receita: R$ 1,303,459,585.00</p>
            </div>
            
        </div>
    )
}
export default Movie