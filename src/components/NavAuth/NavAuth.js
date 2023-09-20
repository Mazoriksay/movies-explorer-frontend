import './NavAuth.css';
import { Link } from 'react-router-dom';

function NavAuth() {
    return (
        <nav className='navigation-auth'>
            <ul className='navigation-auth__list'>
                <li className='navigation-auth__list-el'>
                    <Link to='/signup' className='navigation-auth__link navigation-auth__link_type_up'>Регистрация</Link>
                </li>
                <li className='navigation-auth__list-el'>
                    <Link to='/signin' className='navigation-auth__link navigation-auth__link_type_in'><button className='navigation-auth__button'>Войти</button></Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavAuth;