import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import convertDuration from '../../utils/convertDuration';

function MoviesCard({ movie, onSave, onDelete, savedMovies }) {

    const location = useLocation();


    const isSaved = savedMovies.some((savedMovie) => savedMovie.movieId === movie.id);


    const {hours, minutes} =  convertDuration(movie.duration);

    const convertImage = () => {
        if (location.pathname === '/movies') {
            return `https://api.nomoreparties.co` + movie.image.url;
        } else {
            return movie.image;
        }
    };

    const image = convertImage();

    const savedMovie = {
        country: movie.country || 'Нет данных',
        director: movie.director || 'Нет данных',
        duration: movie.duration || 0,
        year: movie.year || 'Нет данных',
        description: movie.description || 'Нет данных',
        image: image || 'https://s-t-o-l.com/upload/iblock/dc3/hlzb1w7mqu9b7ftb2rqt71wiuqkw9dll.jpg',
        trailerLink: movie.trailerLink || 'https://youtube.com',
        thumbnail: movie.thumbnail || 'https://s-t-o-l.com/upload/iblock/dc3/hlzb1w7mqu9b7ftb2rqt71wiuqkw9dll.jpg',
        nameRU: movie.nameRU || 'Нет данных',
        nameEN: movie.nameEN || 'Нет данных',
        movieId: movie.id,
    };

    const handleSaveClick = () => {
        onSave(savedMovie);
    };

    const handleDeleteClick = () => {
        onDelete(movie);
    };



    return(
        <li className='movie-card'>
            <div className='movie-card__text-container'>
                <h2 className='movie-card__title'>{ movie.nameRU }</h2>
                <p className='movie-card__duration'>{hours}ч {minutes}м</p>
            </div>
            <img 
                 onClick={event =>  window.open(`${movie.trailerLink}`, '_blank')}
                className='movie-card__img' 
                src={ image } 
                alt={ movie.nameRU }
            />
            {location.pathname === '/movies' ?
                <button type='button' className={isSaved ? 'movie-card__btn movie-card__btn_type_saved'  : 'movie-card__btn'}  onClick={handleSaveClick} disabled={isSaved}>
                {!isSaved ? 'Сохранить' : ''}</button>
                : 
                <button className='movie-card__btn movie-card__btn_type_krest' type='button' onClick={handleDeleteClick}></button>
            }     
        </li>
    )
}

export default MoviesCard;