import React from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

import './NotFound.css'

function NotFound() {
    return (

        <>

            <Header />

            <div className='not-found-content-container'>
                <h2>We couldn't find the page you were looking for !</h2>

                <Link to='/'>
                    <button className='go-back-btn'>Go back to home</button>
                </Link>
            </div>

        </>
    )
}

export default NotFound
