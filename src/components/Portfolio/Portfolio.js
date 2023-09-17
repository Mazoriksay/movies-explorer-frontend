import './Portfolio.css';

 function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__list'>
                <li className='portfolio__el'>
                    <a className='portfolio__link' href='https://github.com/Mazoriksay/how-to-learn' target="_blank">
                        <p className='portfolio__subtitle'>Статичный сайт</p>
                        <p className='portfolio__arrow'>↗</p>
                    </a>
                </li>
                <li className='portfolio__el'>
                    <a className='portfolio__link' href='https://github.com/Mazoriksay/russian-travel' target="_blank">
                        <p className='portfolio__subtitle'>Адаптивный сайт</p>
                        <p className='portfolio__arrow'>↗</p>
                    </a>
                </li>
                <li className='portfolio__el'>
                    <a className='portfolio__link' href='https://github.com/Mazoriksay/react-mesto-api-full-gha' target="_blank">
                        <p className='portfolio__subtitle'>Одностраничное приложение</p>
                        <p className='portfolio__arrow'>↗</p>
                    </a>
                </li>
            </ul>
        </section>
    )
 }

 export default Portfolio;