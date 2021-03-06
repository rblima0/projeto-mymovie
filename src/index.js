import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { store } from  './store/store'

import Movie from './modules/components/Movie'
import Search from './modules/components/Search'
import App from './App'

import './assets/css/index.css'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" component={App} />
                <Route exact path="/movie/:movie_id" component={Movie} />
                <Route exact path="/search/:movie_search" component={Search} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
)