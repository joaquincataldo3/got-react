import React from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

import './Header.css'

function Main() {

    return (

        <header>

            <div className='header-main-container'>
                <div className='logo-container'>
                    <img src={logo} alt='got-logo'/>
                </div>

                <nav className='main-navbar'>

                    <ul type="none" className='navbar-ul'>
                        <Link to='/'>
                            <li className='header-li'>Characters</li>
                        </Link>
                        <Link to='/continents'>
                            <li className='header-li'>Continents</li>
                        </Link>
                        <Link to='/quotes'>
                            <li className='header-li'>Quotes</li>
                        </Link>

                    </ul>

                </nav>
            </div>
        </header>

    )

}

export default Main;