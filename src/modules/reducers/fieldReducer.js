const INITIAL_STATE = { value: 'Hello' }

export default function fieldReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'VALUE_CHANGED':
            return { value: action.payload }
        default:
            return state
    }
}