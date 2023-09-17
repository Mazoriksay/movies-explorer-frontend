import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className='footer__container'>
                <p className='footer__copyright'>© 2023</p>
                <nav className='footer__navigation'>
                    <ul className='footer__list'>
                        <li className='footer__el'>
                            <a className='footer__link' href='https://practicum.yandex.ru'>Яндекс.Практикум</a>
                        </li>
                        <li className='footer__el'>
                            <a className='footer__link' href='https://github.com/Mazoriksay'>Github</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;