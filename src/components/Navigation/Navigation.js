import './Navigation.css';
import accImg from '../../images/account.svg';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

function Navigation() {
    const location = useLocation();

    const [isSidebarOpen, setIsSideBarOpen] = useState(false);

    const openSideBar = () => setIsSideBarOpen(true);
    const closeSidebar = () => setIsSideBarOpen(false)

    return (
        <>
            <nav className='navigation'>
                <button className='navigation__btn' type='button' onClick={openSideBar}></button>
                <ul className='navigation__list'>
                    <li className='navigation__list-el'>
                        <Link to='/movies' className={'navigation__link navigation__link_type_movies' +
                        (location.pathname==='/movies' ? ' navigation__link_active' : '')}>
                            Фильмы
                        </Link>
                    </li>
                    <li className='navigation__list-el'>
                        <Link to='/saved-movies' className={'navigation__link navigation__link_type_saved-movies' +
                        (location.pathname==='/saved-movies' ? ' navigation__link_active' : '')}>
                            Сохранённые фильмы
                        </Link>
                    </li>
                    <li className='navigation__list-el'>
                        <Link to='/profile' className={'navigation__link navigation__link_type_account' +
                        (location.pathname==='/profile' ? ' navigation__link_active' : '')}>
                            Аккаунт
                        </Link>
                        <Link to='/profile' className='navigation__link'>
                            <div 
                                className={'navigation__link navigation__link_type_container-image' + (
                                location.pathname === '/movies' ||
                                location.pathname === '/saved-movies' ||
                                location.pathname === '/profile' ? 
                                ' navigation__link navigation__link_type_container-image-black' : ''
                                )}
                            >
                                <img src={accImg} className='navigation__link navigation__link_type_account-image' alt='Человечек'/>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
            <Sidebar isOpen={isSidebarOpen} onClose={ closeSidebar } />
        </>
    )
}

export default Navigation;