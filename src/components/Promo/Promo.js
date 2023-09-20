import './Promo.css';
import globus from '../../images/globus.svg';

function Promo() {
    return (
        <section className='promo'>
            <div className='promo__container'>
                <h1 className='promo__title'>
                    Учебный проект студента факультета Веб&#8209;разработки.
                </h1>
                <p className='promo__subtitle'>
                    Листайте ниже, чтобы узнать больше про этот проект и его создателя.
                </p>
                <a className='promo__anchor' key='about-project' href='#about-project'>Узнать больше</a>
            </div>
            <img className='promo__image' src={globus} alt='Глобус'></img>
        </section>
    )
}

export default Promo;