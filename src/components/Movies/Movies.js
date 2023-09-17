import './Movies.css';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import img1 from '../../images/img1.jpg';

function Movies() {
    return (
        <section className='movies'>
            <SearchForm />
            <MoviesCardList>
                <MoviesCard 
                    title='В погоне за Бенкси'
                    durationHour='0'
                    durationMinute='42'
                    img={img1}
                    isSaved={true}
                />
                <MoviesCard 
                    title='В погоне за Бенкси'
                    durationHour='0'
                    durationMinute='42'
                    img={img1}
                    isSaved={true}
                />
                <MoviesCard 
                    title='В погоне за Бенкси'
                    durationHour='0'
                    durationMinute='42'
                    img={img1}
                    isSaved={false}
                />
                <MoviesCard 
                    title='В погоне за Бенкси'
                    durationHour='0'
                    durationMinute='42'
                    img={img1}
                    isSaved={true}
                />
                <MoviesCard 
                    title='В погоне за Бенкси'
                    durationHour='0'
                    durationMinute='42'
                    img={img1}
                    isSaved={false}
                />
                <MoviesCard 
                    title='В погоне за Бенкси'
                    durationHour='0'
                    durationMinute='42'
                    img={img1}
                    isSaved={false}
                />
                <MoviesCard 
                    title='В погоне за Бенкси'
                    durationHour='0'
                    durationMinute='42'
                    img={img1}
                    isSaved={false}
                />
                <MoviesCard 
                    title='В погоне за Бенкси'
                    durationHour='0'
                    durationMinute='42'
                    img={img1}
                    isSaved={true}
                />
                <MoviesCard 
                    title='В погоне за Бенкси'
                    durationHour='0'
                    durationMinute='42'
                    img={img1}
                    isSaved={false}
                />
                <MoviesCard 
                    title='В погоне за Бенкси'
                    durationHour='0'
                    durationMinute='42'
                    img={img1}
                    isSaved={false}
                />
                <MoviesCard 
                    title='В погоне за Бенкси'
                    durationHour='0'
                    durationMinute='42'
                    img={img1}
                    isSaved={false}
                />
                <MoviesCard 
                    title='В погоне за Бенкси'
                    durationHour='0'
                    durationMinute='42'
                    img={img1}
                    isSaved={true}
                />
            </MoviesCardList>
            <button className='movies__btn'>Ещё</button>
        </section>
    )
}

export default Movies;