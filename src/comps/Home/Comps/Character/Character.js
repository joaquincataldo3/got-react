import React from 'react';
import LoadingSpinner from '../../../LoadingSpinner/LoadingSpinner';
import { Link } from 'react-router-dom';

import './Character.css'
import '../../../LoadingSpinner/LoadingSpinner.css'

function Character({ characters, loading }) {


    return (
        <>
            {
                loading && <LoadingSpinner />
            }

            <div className='cards-container'>
                {
                    characters.map((character, i) => {
                        return (
                            <Link to={`/characters/${character.id}`} key={i}>
                                <div className='character-card'>
                                    <div className='img-container'>
                                        <img src={character.imageUrl} alt={`${character.firstName + character.firstName}`} />
                                    </div>

                                    <div className='info-container'>
                                        <h5 className='character-fullname'> {character.firstName + ' ' + character.lastName} </h5>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                    )
                }
            </div>
        </>
    )

}

export default Character;