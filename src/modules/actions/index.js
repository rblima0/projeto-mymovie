// Action Creators
export const changeValue = (e) => ({
    type: 'VALUE_CHANGED',
    payload: e.target.value
})

export const fieldReducers = (e) => ({
    type: 'SHOW_FIELD',
    payload: e.target.value
})