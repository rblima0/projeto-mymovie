/* CHAVE DE AUTENTICAÇÃO */
export const API_KEY_V1 = '?api_key=5980ad63733ab4725206e0880f35cdf4'
export const API_KEY_V2 = "&api_key=5980ad63733ab4725206e0880f35cdf4"

/* ENDPOINTS */
export const MOVIE_URL_LIST = `https://api.themoviedb.org/3/discover/movie${API_KEY_V1}&language=pt-BR&sort_by=popularity.desc`
export const MOVIE_URL_DETAIL = `https://api.themoviedb.org/3/movie/${API_KEY_V1}`

export const MOVIE_IMG_HOME = 'w185/'
export const MOVIE_URL_IMG = `https://image.tmdb.org/t/p/${MOVIE_IMG_HOME}`