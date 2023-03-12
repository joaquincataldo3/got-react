import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { useGlobalContext } from '../../hooks/context';

import './Quotes.css'



function Quote() {

    const [quotes, setQuotes] = useState([])
    const [loading, setLoading] = useState(false);


    const { renderComp, handleRenderComp,setRenderComp } = useGlobalContext()

    useEffect(() => {
        handleRenderComp()
    }, [])

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

            {
                loading && <LoadingSpinner />
            }

            <main>

                <div className={`quotes-main-container ${renderComp && 'quotes-container-active'}`}>

                    {
                        quotes.map(quote => {
                            return (

                                <div className='quote-global-container'>
                                    <div className='quote-container'>
                                        <h4> "{quote.sentence}" </h4>
                                    </div>

                                    <div className='quote-info'>
                                        <p>Said by: {quote.character.name} from {quote.character.house.name ? quote.character.house.name : 'Unknown'}</p>
                                    </div>
                                </div>

                            )
                        })
                    }



                </div>

                {
                    !loading &&
                    <div className='get-quotes-btn-container'>
                        <button className='get-quotes-btn' onClick={handleBtnClick}> GET MORE QUOTES </button>
                    </div>
                }


            </main>
        </>
    )

}

export default Quote;