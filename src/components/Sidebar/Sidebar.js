import './Sidebar.css';
import accImg from '../../images/account.svg';
import { Link, useLocation } from 'react-router-dom';

function Sidebar({ isOpen, onClose }) {
    const location = useLocation();
    
    return (
        <div className={'overlay' + (isOpen ? ' overlay_opened' : '')}>
            <nav className='sidebar'>
                <button className="sidebar__button-close" type="button" onClick={ onClose }></button>
                <ul className='sidebar__list'>
                    <li className='sidebar__list-el'>
                        <Link to='/' className={'sidebar__link sidebar__link_type_main' + 
                    (location.pathname==='/' ? ' sidebar__link_active' : '')}>Главная</Link>
                    </li>
                    <li className='sidebar__list-el'>
                        <Link to='/movies' className={'sidebar__link sidebar__link_type_movies' +
                        (location.pathname==='/movies' ? ' sidebar__link_active' : '')}>
                            Фильмы
                        </Link>
                    </li>
                    <li className='sidebar__list-el'>
                        <Link to='/saved-movies' className={'sidebar__link sidebar__link_type_saved-movies' +
                        (location.pathname==='/saved-movies' ? ' sidebar__link_active' : '')}>
                            Сохранённые фильмы
                        </Link>
                    </li>
                </ul>
                <div className='sidebar__acc-container'>
                    <Link to='/profile' className={'sidebar__link sidebar__link_type_account' +
                    (location.pathname==='/profile' ? ' sidebar__link_active' : '')}>
                        Аккаунт
                    </Link>
                    <Link to='/profile' className='sidebar__link'>
                        <div className='sidebar__img-container'>
                            <img src={accImg} className='sidebar__link sidebar__link_type_account-image' alt="Человечек"/>
                        </div>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar;