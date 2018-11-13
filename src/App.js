import React from 'react'
// import * as MovieAPI from './MovieAPI'
import Menu from './components/Menu';
import Movie from './components/Movie';
import './styles/css/App.css';

class App extends React.Component {
  state = {
    
  }

  render() {
    return (
      <div className="container">
        <div className="row">
            
            {/* CHAMAR MENU */}
            <Menu />
        
            <section className="col col-content">

            {/* CHAMAR FILME */}
            <Movie />
    
            </section>

        </div>
    </div>
    )
  }
}

export default App
