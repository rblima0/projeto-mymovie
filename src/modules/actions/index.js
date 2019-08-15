// Action Creators
import { MOVIE_GENRE_LIST, MOVIE_DISCOVER_LIST, MOVIE_SEARCH } from '../../config/constants'

export const FETCH_GENRE_LIST = 'FETCH_GENRE_LIST'
export const FETCH_GENRE_LIST_SUCCESS = 'FETCH_GENRE_LIST_SUCCESS'
export const FETCH_GENRE_LIST_FAILURE = 'FETCH_GENRE_LIST_FAILURE'

function setFetchGenreList() {
    return {
        type: FETCH_GENRE_LIST
    }
}

function setFetchGenreListSuccess(data) {
    return {
        type: FETCH_GENRE_LIST_SUCCESS,
        data
    }
}

function setFetchGenreListFail(error) {
    return {
        type: FETCH_GENRE_LIST_FAILURE,
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