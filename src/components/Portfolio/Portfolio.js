import './Portfolio.css';

 function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__list'>
                <li className='portfolio__el'>
                    <a className='portfolio__link' href='https://github.com/Mazoriksay/how-to-learn'>Статичный сайт</a>
                    <a className='portfolio__arrow-link' href='https://github.com/Mazoriksay/how-to-learn'>↗</a>
                </li>
                <li className='portfolio__el'>
                    <a className='portfolio__link' href='https://github.com/Mazoriksay/russian-travel'>Адаптивный сайт</a>
                    <a className='portfolio__arrow-link' href='https://github.com/Mazoriksay/russian-travel'>↗</a>
                </li>
                <li className='portfolio__el'>
                    <a className='portfolio__link' href='https://github.com/Mazoriksay/react-mesto-api-full-gha'>Одностраничное приложение</a>
                    <a className='portfolio__arrow-link' href='https://github.com/Mazoriksay/react-mesto-api-full-gha'>↗</a>
                </li>
            </ul>
        </section>
    )
 }

 export default Portfolio;