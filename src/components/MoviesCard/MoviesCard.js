import './MoviesCard.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({ title, durationHour, durationMinute, img, isSaved }) {
    // const [isSaved, setIsSaved] = useState(false);
    const location = useLocation();
    return(
        <li className='movie-card'>
            <div className='movie-card__text-container'>
                <h2 className='movie-card__title'>{title}</h2>
                <p className='movie-card__duration'>{durationHour}ч {durationMinute}м</p>
            </div>
            <img className='movie-card__img' src={img} alt={title}/>
            {location.pathname === '/movies' ?
                <button className={'movie-card__btn' + 
                (isSaved ?  ' movie-card__btn_type_saved' : '')}>
                {!isSaved ? 'Сохранить' : ''}</button>
                : 
                <button className='movie-card__btn movie-card__btn_type_krest'></button>
            }     
        </li>
    )
}

export default MoviesCard;