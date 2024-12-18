import React from 'react'
import usePagination from '../../../hooks/usePagination'

const Pagination = ({ page, setPage, totalPages }) => {
    let pagesArray = usePagination(totalPages)
    return (
        <div className='pages'>
            {pagesArray.map((p) =>
                <span onClick={() => setPage(p)}
                    key={p} className={page === p ? 'page page-current' : 'page'}>{p}</span>
            )}
        </div>
    )
}

export default Pagination
