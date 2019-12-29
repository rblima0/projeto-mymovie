import React from 'react'
import MovieIcon from '@material-ui/icons/Movie'

const primaryMenu = [
  {
    title: 'MyMovies',
    href: '/dashboard',
    icon: <MovieIcon />
  }
]

const secondaryMenu = [
  {
    title: "Menu Principal", id: [
      {
        value: 'Populares',
        href: '/populares'
      },
      {
        value: 'Lançamentos',
        href: '/lancamentos'
      },
      {
        value: 'Próximas Estreias',
        href: '/proximas-estreias'
      }
    ]
  },
  {
    title: "Gêneros", id: [
      {
        value: 'Ação',
        href: '/acao'
      },
      {
        value: 'Aventura',
        href: '/aventura'
      },
      {
        value: 'Animação',
        href: '/animacao'
      },
      {
        value: 'Comédia',
        href: '/comedia'
      },
      {
        value: 'Crime',
        href: '/crime'
      },
      {
        value: 'Documentário',
        href: '/documentario'
      },
      {
        value: 'Drama',
        href: '/drama'
      },
      {
        value: 'Família',
        href: '/familia'
      },
      {
        value: 'Fantasia',
        href: '/fantasia'
      },
      {
        value: 'História',
        href: '/historia'
      },
      {
        value: 'Terror',
        href: '/terror'
      },
      {
        value: 'Música',
        href: '/musica'
      },
      {
        value: 'Mistério',
        href: '/misterio'
      },
      {
        value: 'Romance',
        href: '/romance'
      },
      {
        value: 'Ficção Científica',
        href: '/ficcao-cientifica'
      },
      {
        value: 'Cinema TV',
        href: '/cinema-tv'
      },
      {
        value: 'Thriller',
        href: '/thriller'
      },
      {
        value: 'Guerra',
        href: '/guerra'
      },
      {
        value: 'Faroeste',
        href: '/faroeste'
      }
    ]
  }
]

export { primaryMenu, secondaryMenu }
