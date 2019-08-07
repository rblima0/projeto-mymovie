import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Movie from './components/Movie'
import App from './App'

import fieldReducer from './modules/reducers/fieldReducer'

import './assets/css/index.css'

const reducers = combineReducers({
    field: fieldReducer
})

let store = createStore(
    reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" component={App} />
                <Route exact path="/movie/:movie_id" component={Movie} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
)