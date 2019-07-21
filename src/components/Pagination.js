import React from 'react'

const Pagination = (props) => {
    const { pages, currentPage, shouldPaginate } = props
    const links = []

    for(let i = 1; i <= pages + 1; i++) {
        let active = currentPage === i ? 'active' : ''

        links.push(<li key={i} className={`link ${active}`} onClick={() => shouldPaginate(i)}><a href="#">{i}</a></li>)
    }

    return (
        <div className="pagination">
            <ul>
                {currentPage > 1 && 
                    <li className="link previous" onClick={() => shouldPaginate(currentPage - 1)}>
                        <a href="#">Prev</a>
                    </li>
                }
                {/* {links} */}
                {currentPage < pages + 1 && 
                    <li className="link next" onClick={() => shouldPaginate(currentPage + 1)}>
                        <a href="#">Next</a>
                    </li>
                }
            </ul>
        </div>
    )
}
export default Pagination