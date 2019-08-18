// CombineReducers
import { combineReducers } from 'redux'
import genreListReducer from '../modules/reducers/genreListReducer'
import discoverListReducer from '../modules/reducers/discoverListReducer'

const rootReducer = combineReducers({
    genreListReducer,
    discoverListReducer
})

export default rootReducer