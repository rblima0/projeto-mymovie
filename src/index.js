import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import { BrowserRouter } from 'react-router-dom'

import './assets/css/index.css'

const reducers = combineReducers({
    field: () => ({ value: 'Hello World' })
})

ReactDOM.render(
    <BrowserRouter>
        <Provider store={createStore(reducers)}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)