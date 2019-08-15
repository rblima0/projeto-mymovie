/* import { fieldReducers } from '../actions/index'

const fieldReducer = (state = fieldReducers, action) => {
    switch(action.type) {
        case 'VALUE_CHANGED':
            return { value: action.payload }
        default:
            return state
    }
}

export default fieldReducer */

import { 
    FETCH_GENRE_LIST, 
    FETCH_GENRE_LIST_SUCCESS, 
    FETCH_GENRE_LIST_FAILURE 
} from '../actions/index'

const defaultStateList = {
    isFetching: false,
    genres: [],
    error: {}
  };

const genreListReducer = (state = defaultStateList, action) => {
    switch (action.type) {
        case FETCH_GENRE_LIST:
            return Object.assign({}, state, {
                isFetching: true
            })
        case FETCH_GENRE_LIST_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                genres: action.data
            })
        case FETCH_GENRE_LIST_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.data
            })
        default:
            return state
    }
}

export default genreListReducer