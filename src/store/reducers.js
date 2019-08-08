// CombineReducers
import { combineReducers } from 'redux'
import fieldReducer from '../modules/reducers/fieldReducer'

const rootReducer = combineReducers({
    fieldReducer
})

export default rootReducer