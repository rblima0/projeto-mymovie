import React from 'react'
import { Link } from 'react-router-dom'

import './Card.styl'

const Card = () => {
  return (
    <div className='card'>
      <div className='card__item'>
        <Link to='/'>
          <img src='https://image.tmdb.org/t/p/w185//jvg9Rf3mvsVTnhuyxPlN0eEL76C.jpg' alt='' />
        </Link>
        <Link to='/'>
          <h3>Jumanji: Próxima Fase</h3>
        </Link>
        <span>Ação</span><span>Aventura</span><span>Humor</span><span>FICÇÃO CIENTÍFICA</span>
        <p>Tentado em revisitar o mundo de Jumanji, Spencer (Alex Wolff) decide consertar o jogo de videogame que permite que os jogadores sejam transportados ao local. Logo o quarteto formado por Smolder Bravestone (Dwayne Johnson), Moose Finbar (Kevin Hart), Shelly Oberon (Jack Black) ...</p>
      </div>
    </div>
  )
}

export { Card }
