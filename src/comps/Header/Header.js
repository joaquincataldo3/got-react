import React from 'react';
import logo from '../../assets/logo.png'
import { useGlobalContext } from '../../hooks/context';
import { NavLink } from 'react-router-dom';

import './Header.css'

function Main() {

    const { setRenderComp } = useGlobalContext()

    const handleNavbarLinkClick = (e) => {
        if (e.currentTarget.classList.contains('nav-link-active')) {
          return true
        } else {
          return setRenderComp(false)
        }
      }

    return (

        <header>

            <div className='header-main-container'>
                <div className='logo-container'>
                    <img src={logo} alt='got-logo'/>
                </div>

                <nav className='main-navbar'>

                    <ul type="none" className='navbar-ul'>
                        <NavLink to='/characters' className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'} onClick={(e) => handleNavbarLinkClick(e)}>
                            <li className='header-li'>Characters</li>
                        </NavLink>
                        <NavLink to='/continents' className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'} onClick={(e) => handleNavbarLinkClick(e)}>
                            <li className='header-li'>Continents</li>
                        </NavLink>
                        <NavLink to='/quotes' className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'} onClick={(e) => handleNavbarLinkClick(e)}>
                            <li className='header-li'>Quotes</li>
                        </NavLink>

                    </ul>

                </nav>
            </div>
        </header>

    )

}

export default Main;