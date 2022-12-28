import React from 'react'

const Pagination = (props) => {

    const {page, totalPages, onPrevoiusClick, onNextClick} = props

    return (
        <div className="pagination-container">
            <button onClick={onPrevoiusClick}><div>⬅️</div></button>
            <div>{page} of {totalPages} </div>
            <button onClick={onNextClick}><div>➡️</div></button>
        </div>
    )
}

export default Pagination