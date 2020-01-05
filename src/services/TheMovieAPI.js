import axios from 'axios'

const APIKEY = '5980ad63733ab4725206e0880f35cdf4'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
})

export async function searchMovieList(genreId) {
  const genre = genreId ? `&with_genres=${genreId}` : ''

  try {
    const { data } = await instance.get(
      `discover/movie?api_key=${APIKEY}&language=pt-BR&sort_by=popularity.desc&page=1${genre}`
    )
    return data
  } catch (error) {
    if (!error.isAxiosError) {
      throw error
    }

    throw error
  }
}

export async function searchGenreList() {
  try {
    const { data } = await instance.get(
      `genre/movie/list?api_key=${APIKEY}&language=pt-BR`
    )
    return data.genres
  } catch (error) {
    if (!error.isAxiosError) {
      throw error
    }

    throw error
  }
}
