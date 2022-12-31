import React from 'react';
import LoadingSpinner from '../../../LoadingSpinner/LoadingSpinner';
import { Link } from 'react-router-dom';

import './Character.css'
import '../../../LoadingSpinner/LoadingSpinner.css'

function Character(props) {

    const { characters, loading} = props;

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
                                        <h4 className='character-fullname'> {character.firstName} </h4>
                                        <h4 className='character-fullname'> {character.lastName} </h4>
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