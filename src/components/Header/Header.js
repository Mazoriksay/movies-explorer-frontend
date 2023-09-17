import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import NavAuth from '../NavAuth/NavAuth';

import { Link, useLocation } from 'react-router-dom';

function Header({ isLoggedIn }) {
    const location = useLocation();
    
    return (
        <header 
            className= {'header' + (
                location.pathname === '/movies' ||
                location.pathname === '/saved-movies' ||
                location.pathname === '/profile' ?
                ' header_type_black' : '')
            }
        >
            <Link to='/'>
                <img src={logo} className='header__logo' alt='Логотип'/>
            </Link>
            {isLoggedIn ? <Navigation/> : <NavAuth/>}
        </header>
    )
}

export default Header;