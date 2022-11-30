import React, { useState } from 'react';
import classNames from 'classnames';


function Pagination(props) {

    const [activePage, setActivePage] = useState(1);
    const { charactersPerPage, totalCharacters, paginate, arrowPaginateRigth, arrowPaginateLeft } = props;

    const pageNumbers = [];

    for (let i = 1; i <= (totalCharacters / charactersPerPage); i++) {
        pageNumbers.push(i)
    }

    function toggleClass(pageNumber) {
        paginate(pageNumber);
        setActivePage(pageNumber);
    }
    
    function arrowRightWithActivePage (activePage){
        arrowPaginateRigth(activePage);
        setActivePage(activePage + 1);
    }

    function arrowLeftWithActivePage (activePage){
        arrowPaginateLeft(activePage);
        setActivePage(activePage - 1);
    }

    return (
        <nav className='pagination-container'>
            <div className='arrow-container' onClick={() => activePage != 1 && arrowLeftWithActivePage(activePage)}>
                <i class='bx bx-chevron-left'></i>
            </div>
            <ul type='none' className='pagination-ul'>

                {
                    pageNumbers.map((number, index) => {
                        return (
                            <li key={index} >
                                <span className={classNames('pagination-item', { 'pagination-item-active': activePage === number })} onClick={() => toggleClass(number)}> {number}
                                </span>
                            </li>
                        )

                    })
                }
            </ul>
            <div className='arrow-container' onClick={() => pageNumbers[pageNumbers.length - 1] != activePage && arrowRightWithActivePage(activePage)}>
                <i className='bx bx-chevron-right'></i>
            </div>
        </nav>
    )
}

export default Pagination;