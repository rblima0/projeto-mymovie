/* CHAVE DE AUTENTICAÇÃO */
const API_KEY = process.env.REACT_APP_API_KEY

/* HELPERS */
const URL = 'https://api.themoviedb.org/3'
const LANGUAGE = '&language=pt-BR'
const SORT = '&sort_by=popularity.desc'
const ADULT = '&include_adult=false'
const MOVIE_IMG_HOME = `w185/`

/* ENDPOINTS */
export const MOVIE_GENRE_LIST = `${URL}/genre/movie/list?api_key=${API_KEY}${LANGUAGE}`
export const MOVIE_DISCOVER_LIST = `${URL}/discover/movie?api_key=${API_KEY}${LANGUAGE}${ADULT}${SORT}`
export const MOVIE_SEARCH = `${URL}/search/movie?api_key=${API_KEY}${LANGUAGE}${ADULT}`

//export const MOVIE_PERSON = `${URL}/person/`
//export const MOVIE_DETAIL = `https://api.themoviedb.org/3/movie/`
export const MOVIE_URL_IMG = `https://image.tmdb.org/t/p/${MOVIE_IMG_HOME}`
