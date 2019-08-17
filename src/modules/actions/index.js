// Action Creators
import { MOVIE_GENRE_LIST, MOVIE_DISCOVER_LIST, MOVIE_SEARCH } from '../../config/constants'

export function setFetchGenreList() {
    return {
        type: 'FETCH_GENRE_LIST'
    }
}

export function setFetchGenreListSuccess(data) {
    return {
        type: 'FETCH_GENRE_LIST_SUCCESS',
        data
    }
}

export function setFetchGenreListFail(error) {
    return {
        type: 'FETCH_GENRE_LIST_FAILURE',
        error
    }
}

export function fetchGenreList() {
    return function(dispatch) {
        dispatch(setFetchGenreList())
        return fetch(MOVIE_GENRE_LIST)
            .then(response => response.json())
            .then(json => json.genres)
            .then(data => dispatch(setFetchGenreListSuccess(data)))
            .catch(error => dispatch(setFetchGenreListFail(error)))
    }
}