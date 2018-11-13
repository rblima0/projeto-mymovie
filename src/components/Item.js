import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Item extends Component {

    /* constructor(){

    } */

    render() {
        return (
            <div className="item">
                <Link to={`/movie`}>
                    <img src="img/1.jpg" alt="Movie" />
                </Link>
                <Link to={`/movie`}>
                    <h3>Jurassic World</h3>
                </Link>
                <span>Ação</span><span>Aventura</span><span>Ficção Científica</span>
                
                <p>Quatro anos após o fechamento do Jurassic World, um vulcão prestes a entrar em erupção põe em risco a vida na ilha Nublar. No local não há mais qualquer presença...</p>
                <p>Mais informações necessárias</p>
            </div>
        );
    }
}

/* props - guarda todos os parametros enviados para esse componente */
