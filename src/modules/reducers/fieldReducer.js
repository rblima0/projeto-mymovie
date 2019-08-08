import { fieldReducers } from '../actions/index'

const fieldReducer = (state = fieldReducers, action) => {
    switch(action.type) {
        case 'VALUE_CHANGED':
            return { value: action.payload }
        default:
            return state
    }
}

export default fieldReducer