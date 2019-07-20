/* CHAVE DE AUTENTICAÇÃO */
export const API_KEY_V1 = '?api_key=5980ad63733ab4725206e0880f35cdf4'
const API_KEY_V2 = "&api_key=5980ad63733ab4725206e0880f35cdf4"
const LANGUAGE = '&language=pt-BR'
const SORT = '&sort_by=popularity.desc'
const MOVIE_IMG_HOME = `w185/`

/* ENDPOINTS */

export const MOVIE_GENRE_LIST = `https://api.themoviedb.org/3/genre/movie/list${API_KEY_V1}${LANGUAGE}`
export const MOVIE_DISCOVER_LIST = `https://api.themoviedb.org/3/discover/movie${API_KEY_V1}${LANGUAGE}${SORT}`

//export const MOVIE_DETAIL = `https://api.themoviedb.org/3/movie/${movie_id}${API_KEY_V1}${LANGUAGE}`
//export const MOVIE_DETAIL = `https://api.themoviedb.org/3/movie/`
//export const MOVIE_SEARCH = `https://api.themoviedb.org/3/search/movie${API_KEY_V1}${LANGUAGE}&query=${movie_name}&page=1&include_adult=false`
export const MOVIE_PERSON = `https://api.themoviedb.org/3/person/`

export const MOVIE_URL_IMG = `https://image.tmdb.org/t/p/${MOVIE_IMG_HOME}`