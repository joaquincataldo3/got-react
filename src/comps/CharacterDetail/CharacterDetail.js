import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { useGlobalContext } from '../../hooks/context';
import './CharacterDetail.css';
import { render } from '@testing-library/react';


function CharacterDetail() {

    const [singleCharacter, setSingleCharacter] = useState({});
    const [loading, setLoading] = useState(false)
    const { characterId } = useParams();

    const { renderComp, handleRenderComp, setRenderComp } = useGlobalContext()

    useEffect(() => {
        handleRenderComp()
    }, [])


    useEffect(() => {
        setLoading(true)
        fetch(`https://thronesapi.com/api/v2/Characters/${characterId}`)
            .then(response => response.json())
            .then(data => {
                setSingleCharacter(data);
                setLoading(false)
            });
    }, [])

    return (

        <>

            {
                loading && <LoadingSpinner />
            }

            {

                !loading && 

                <div className={`character-card-container ${renderComp && 'card-active'}`}>
                    <div className='character-img-container'>
                        <img src={singleCharacter.imageUrl} alt={singleCharacter.firstName + ' ' + singleCharacter.lastName}/>
                    </div>

                    <div className='character-info-container'>
                        <h4 className='character-detail-fullname'> {singleCharacter.firstName + ' ' + singleCharacter.lastName} </h4>
                        <ul type="none">
                            <li className='character-detail-info-li'>Title: {singleCharacter.title}</li>
                            <li className='character-detail-info-li'>Family: {singleCharacter.family}</li>
                        </ul>
                    </div>
                </div>

            }

            {
                !loading &&
                <Link to='/characters' onClick={() => setRenderComp(false)}>
                    <div className='go-back-btn-container'>
                        <button className='go-back-btn'> BACK TO CHARACTERS </button>
                    </div>
                </Link>
            }

        </>
    )

}

export default CharacterDetail;