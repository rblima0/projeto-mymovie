const INITIAL_STATE = { isFetching: false, movies: [], results: [], error: {} }

const discoverListReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_DISCOVER_LIST':
            return {
                ...state,
                isFetching: true
            }
        case 'FETCH_DISCOVER_LIST_SUCCESS':
            return {
                ...state,
                isFetching: false,
                movies: action.data,
                results: action.data.length
            }
        case 'FETCH_DISCOVER_LIST_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.data
            }
        default:
            return state
    }
}

export default discoverListReducer