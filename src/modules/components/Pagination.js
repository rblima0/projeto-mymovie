import React from 'react'

const Pagination = (props) => {
    const { pages, currentPage, fetchPaginateList } = props
    const links = []

    for(let i = 1; i <= pages + 1; i++) {
        let active = currentPage === i ? 'active' : ''

        links.push(<li key={i} className={`link ${active}`} onClick={() => fetchPaginateList(i)}><button onClick={() => window.scrollTo(0, 0)}>{i}</button></li>)
    }

    return (
        <div className="pagination">
            <ul>
                {currentPage > 1 && 
                    <li className="link previous" onClick={() => fetchPaginateList(currentPage - 1)}>
                        <button onClick={() => window.scrollTo(0, 0)}>Prev</button>
                    </li>
                }
                {/* {links} */}
                {currentPage < pages + 1 && 
                    <li className="link next" onClick={() => fetchPaginateList(currentPage + 1)}>
                        <button onClick={() => window.scrollTo(0, 0)}>Next</button>
                    </li>
                }
            </ul>
        </div>
    )
}
export default Pagination