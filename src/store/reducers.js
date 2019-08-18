// CombineReducers
import { combineReducers } from 'redux'
import genreListReducer from '../modules/reducers/genreListReducer'
import discoverListReducer from '../modules/reducers/discoverListReducer'
import searchListReducer from '../modules/reducers/searchListReducer'

const rootReducer = combineReducers({
    genreListReducer,
    discoverListReducer,
    searchListReducer
})

export default rootReducer