import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

import './Quotes.css'



function Quote() {

    const [quotes, setQuotes] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch("https://api.gameofthronesquotes.xyz/v1/random/5")
            .then(response => response.json())
            .then(data => {
                setQuotes(data);
                setLoading(false)
            });
    }, [])

    const handleBtnClick = () => {
        setLoading(true)
        fetch("https://api.gameofthronesquotes.xyz/v1/random/5")
            .then(response => response.json())
            .then(data => {
                setQuotes(data);
                setLoading(false)
            });
    }

    return (

        <>
            <Header />

            {
                loading && <LoadingSpinner />
            }

            <main>

                <div className='quotes-main-container'>

                    {
                        quotes.map(quote => {
                            return (

                                <div className='quote-global-container'>
                                    <div className='quote-container'>
                                        <h4> "{quote.sentence}" </h4>
                                    </div>

                                    <div className='quote-info'>
                                        <p>{quote.character.name}</p>
                                        <p>{quote.character.house.name ? quote.character.house.name : 'Unknown'}</p>

                                    </div>
                                </div>

                            )
                        })
                    }



                </div>

                {
                    !loading &&
                    <div className='get-quotes-btn-container'>
                        <button className='get-quotes-btn' onClick={handleBtnClick}> Get more quotes ! </button>
                    </div>
                }


            </main>
        </>
    )

}

export default Quote;