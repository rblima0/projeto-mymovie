import React from 'react'

const ErrorPage = (props) => {    
    return (
        <div className="error">
            <img width="200px" src="../img/mymovies-logo.svg" alt="Logo icon" />
            <h2>Não encontramos nada aqui</h2>
            <h4>Tente navegar em nosso menu</h4>
            <a href="/">Pagina principal</a>
        </div>
    )
}
export default ErrorPage