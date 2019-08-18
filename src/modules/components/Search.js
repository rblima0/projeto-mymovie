import React from 'react'

const Search = (props) => {
    const { handleSubmit, handleChange } = props

    return (
        <section className="search">
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Faça sua pesquisa..." onChange={handleChange} />
            </form>
        </section>
    )
}
export default Search