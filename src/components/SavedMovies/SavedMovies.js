import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import img2 from '../../images/img2.jpg';

function SavedMovies() {
    return (
        <section className='saved-movies'>
            <SearchForm />
            <MoviesCardList>
                    <MoviesCard 
                        title='В погоне за Бенкси'
                        durationHour='0'
                        durationMinute='42'
                        img={img2}
                    />
                    <MoviesCard 
                        title='В погоне за Бенкси'
                        durationHour='0'
                        durationMinute='42'
                        img={img2}
                    />
                    <MoviesCard 
                        title='В погоне за Бенкси'
                        durationHour='0'
                        durationMinute='42'
                        img={img2}
                    />

            </MoviesCardList>
            {/* <button className='saved-movies__btn'>Ещё</button> */}
        </section>
    )
}

export default SavedMovies;