import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Header from '../Header/Header';

import './CharacterDetail.css';


function CharacterDetail() {

    const [singleCharacter, setSingleCharacter] = useState({});
    const [loading, setLoading] = useState(false)
    const { characterId } = useParams();

    useEffect(() => {
        setLoading(true)
        fetch(`https://thronesapi.com/api/v2/Characters/${characterId}`)
            .then(response => response.json())
            .then(data => {
                setSingleCharacter(data);
                setLoading(false)
            });
    }, [])

    console.log(singleCharacter)

    return (

        <>
            <Header />

            {
                loading && <LoadingSpinner />
            }

            {

                <div className='character-card-container'>
                    <div className='character-img-container'>
                        <img src={singleCharacter.imageUrl} />
                    </div>

                    <div className='character-info-container'>
                        <h4 className='character-fullname'> {singleCharacter.firstName + ' ' + singleCharacter.lastName} </h4>
                        <ul type="none">
                            <li>{singleCharacter.title}</li>
                            <li>{singleCharacter.family}</li>
                        </ul>
                    </div>
                </div>

            }

            {
                !loading &&
                <Link to='/'>
                    <div className='go-back-btn-container'>
                        <button className='go-back-btn'> Back to characters </button>
                    </div>
                </Link>
            }

        </>
    )

}

export default CharacterDetail;