// CombineReducers
import { combineReducers } from 'redux'
import genreListReducer from '../modules/reducers/genreListReducer'

const rootReducer = combineReducers({
    genreListReducer
})

export default rootReducer