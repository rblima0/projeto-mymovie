// Action Creators
import { MOVIE_GENRE_LIST, MOVIE_DISCOVER_LIST, MOVIE_SEARCH } from '../../config/constants'

// GENRE LIST

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

// MOVIE LIST

export function setFetchDiscoverList() {
    return {
        type: 'FETCH_DISCOVER_LIST'
    }
}
  
export function setFetchDiscoverListSuccess(data) {
    return {
        type: 'FETCH_DISCOVER_LIST_SUCCESS',
        data
    }
}
  
export function setFetchDiscoverListFail(error) {
    return {
        type: 'FETCH_DISCOVER_LIST_FAILURE',
        error
    }
}

export function fetchDiscoverList() {
    return function(dispatch) {
        dispatch(setFetchDiscoverList())
        return fetch(MOVIE_DISCOVER_LIST)
            .then(response => response.json())
            .then(json => json.results)
            .then(data => dispatch(setFetchDiscoverListSuccess(data)))
            .catch(error => dispatch(setFetchDiscoverListFail(error)))
    }
}

// MOVIE SEARCH

export function setFetchSearchMovieList(search) {
    return {
        type: 'FETCH_SEARCH_MOVIE_LIST',
        search
    }
}

export function setFetchSearchMovieListSuccess(data, search) {
    return {
        type: 'FETCH_SEARCH_MOVIE_LIST_SUCCESS',
        data,
        search
    }
}

export function setFetchSearchMovieListFail(error) {
    return {
        type: 'FETCH_SEARCH_MOVIE_LIST_FAILURE',
        error
    }
}

export function fetchSearchMovieList(search) {
    return function(dispatch) {
        dispatch(setFetchSearchMovieList())
        return fetch(`${MOVIE_SEARCH}&query=${search}`)
            .then(response => response.json())
            .then(json => json.results)
            .then(data => dispatch(setFetchSearchMovieListSuccess(data)))
            .catch(error => dispatch(setFetchSearchMovieListFail(error)))
    }
}