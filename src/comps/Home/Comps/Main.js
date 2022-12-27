import React, { useState, useEffect} from 'react';
import Character from './Character/Character';
import Pagination from "./Pagination/Pagination";

import './Main.css'
import './Pagination/Pagination.css'

function Main() {

    const [characters, setCharacter] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [charactersPerPage] = useState(10);


    useEffect(() => {
        setLoading(true)
        fetch("https://thronesapi.com/api/v2/Characters")
            .then(response => response.json())
            .then(data => {
                setCharacter(data);
                setLoading(false)
            });
    }, [])

    //pagination
    const startIdx = currentPage * charactersPerPage;
    const paginatedCharacters = characters.slice(startIdx, startIdx + charactersPerPage);

    // page change
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);    
    }

    //paginate with arrow
  
    const arrowPaginateRigth = (currentPage) => {
        setCurrentPage(currentPage + 1)
    }

    const arrowPaginateLeft = (currentPage) => {
        setCurrentPage(currentPage - 1)
    }

   return (

      <main>
         <Character 
         characters={paginatedCharacters} 
         loading={loading}/>

         <Pagination 
         charactersPerPage={charactersPerPage} 
         totalCharacters={characters.length} 
         paginate={paginate} 
         arrowPaginateRigth={arrowPaginateRigth}
         arrowPaginateLeft={arrowPaginateLeft}
         />
      </main>
   )

}

export default Main;