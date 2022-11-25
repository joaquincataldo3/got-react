import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import gotMap from '../../assets/westerosessos.jpg'
import Header from '../Header/Header';
import classNames from 'classnames';

import './Continents.css'

function Continents() {

    const [continents, setContinents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedContinent, setselectedContinent] = useState();
    const [liClick, setLiClick] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch("https://thronesapi.com/api/v2/Continents")
            .then(response => response.json())
            .then(data => {
                setContinents(data);
                setLoading(false)
            });
    }, [])

    const handleContinentClick = (continentId) => {
        /* setLiClick(!liClick) */
        setselectedContinent(continentId);
    }

    const continent_descriptions = {
        0: 'Westeros is a great continent located in the far west of the known world. It is separated from the continent of Essos by the Narrow Sea.',

        1: 'Essos is the name of the great continent lying to the east of Westeros, across the Narrow Sea. It is the largest of the known worlds four continents, extending for many thousands of miles into the distant east.',

        2: 'Sothoryos is the third continent in the known world, after Westeros and Essos. It lies to the southeast of Westeros and due south of Slavers Bay in Essos, across the Summer Sea. Sothoryos is located in the extreme south of the known world, and it is mostly unexplored.',

        3: 'Ulthos is the smallest, the least-known and most obscure of the known worlds four continents. It is located south of Asshai and the Shadow Lands and east of Sothoryos. The continent forms the south-eastern coastline of the Jade Sea'
    }


    return (

        <>
            <Header />

            <main>
                {
                    loading ?

                        <LoadingSpinner />

                        :

                        <div className='continent-img'>
                            <img src={gotMap} alt='essos-westeros-map' />
                        </div>

                }
                
                <div className='continent-list'>
                    <h4>Continents:</h4>
                    <ul type='none'>
                        {
                            continents.map((continent, i) => {
                                return (
                                    <>
                                        <div className={classNames('continent-global-container', {'continent-global-container-active': selectedContinent === continent.id /* && liClick === true */})} onClick={() => handleContinentClick(continent.id)} key={i}>
                                            <div className='continent-name-arrow-container'>
                                                <li className='continent-name'> {continent.name} </li>
                                                <i class='bx bx-chevron-down'></i>
                                            </div>
                                            <div className={classNames('dropdown-menu', { 'dropdown-menu-active': selectedContinent === continent.id /* && liClick === true */ })}>
                                                <p>{continent_descriptions[`${continent.id}`]}</p>
                                            </div>
                                        </div>

                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
            </main>
        </>

    )

}

export default Continents;