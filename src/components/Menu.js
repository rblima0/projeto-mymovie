import React, { Component } from 'react';

export default class Menu extends Component {

    /* constructor(){

    } */

    render() {
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
                        <li><a href="#">Bem avaliados</a></li>
                        <li><a href="#">Pessoas</a></li>
                    </ul>
                    <span>Gêneros</span>
                    <ul>
                        <li><a href="#">Ação</a></li>
                        <li><a href="#">Aventura</a></li>
                        <li><a href="#">Animação</a></li>
                        <li><a href="#">Romance</a></li>
                        <li><a href="#">Drama</a></li>
                        <li><a href="#">Comédia</a></li>
                        <li><a href="#">Terror</a></li>
                        <li><a href="#">Suspense</a></li>
                    </ul> 
                </nav>
            </section>
        );
    }
}

/* props - guarda todos os parametros enviados para esse componente */