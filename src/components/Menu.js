import React from 'react'

const Menu = (props) => {

    const { genres } = props

    return (
        <section className="col col-sidebar">
            <div className="menu-trigger" id="menu-trigger">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <nav className="menu-hidde" id="menu-hidde">
                <img src="img/mymovies-logo.svg" alt="Logo icon" />
                <span>Menu Principal</span>
                <ul>
                    <li><a href="/">Lançamentos</a></li>
                    <li><a href="/movie">Próximas estreias</a></li>
                    <li><a href="/search">Populares</a></li> 
                    <li><a href="">Bem avaliados</a></li>
                    <li><a href="">Pessoas</a></li>
                </ul>
                <span>Gêneros</span>
                <ul>
                    {genres.map(genre => (
                        <li key={genre.id}><a href="">{genre.name}</a></li>
                    ))}
                </ul> 
            </nav>
        </section>
    )
}
export default Menu