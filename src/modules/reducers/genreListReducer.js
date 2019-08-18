const INITIAL_STATE = { genres: [], isFetching: false, error: {} }

const genreListReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_GENRE_LIST':
            return {
                ...state,
                isFetching: true
            }
        case 'FETCH_GENRE_LIST_SUCCESS':
            return {
                ...state,
                isFetching: false,
                genres: action.data
            }
        case 'FETCH_GENRE_LIST_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.data
            }
        default:
            return state
    }
}

export default genreListReducer