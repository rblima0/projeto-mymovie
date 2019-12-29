import React from 'react'
import { Link } from 'react-router-dom'

import './Card.styl'

const Card = () => {
  return (
    <div className="card">
      <Link to='/'>
        <img src='' alt='' />
      </Link>
      <Link to='/'>
        <h3>Jumanji: Próxima Fase</h3>
      </Link>
      <span>Ação</span><span>Aventura</span><span>Humor</span>
      <p>Tentado em revisitar o mundo de Jumanji, Spencer (Alex Wolff) decide consertar o jogo de videogame que permite que os jogadores sejam transportados ao local. Logo o quarteto formado por Smolder Bravestone (Dwayne Johnson), Moose Finbar (Kevin Hart), Shelly Oberon (Jack Black) e Ruby Roundhouse (Karen Gillan) ressurge, agora comandado por outras pessoas: os avôs de Spencer e Fridge (Danny DeVito e Danny Glover) assumem as personas de Bravestone e Finbar, enquanto o próprio Fridge (SerDarius Blain) agora está sob a pele de Oberon.</p>
    </div>
  )
}

export { Card }
