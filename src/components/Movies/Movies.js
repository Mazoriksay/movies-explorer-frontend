import './Movies.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import {moviesApi} from '../../utils/MoviesApi';
import { api } from '../../utils/MainApi';
import { widthMovies, numMovies, numToLoadMovies } from '../../utils/constants';


function Movies({ isLoggedIn }) {
    const [movies, setMovies] = useState([]);
    const [searchMovies, setSearchMovies] = useState([]);
    const [savedMovies, setSavedMovies] = useState([]);
    const [searchSavedMovies, setSearchSavedMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [moviesNum, setMoviesNum] =  useState(0);
    const [moviesToLoad, setMoviesToLoad] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showMore, setShowMore] = useState(false);
    const [isMovieChecked, setIsMovieChecked] = useState(false);
    const [movieInputText, setMovieInputText] = useState('');
    const [isMovieSearch, setIsMovieSearch] = useState(false);
    const [isSavedChecked, setIsSavedChecked] = useState(false);
    const [isSavedSearch, setIsSavedSearch] = useState(false);
    const location = useLocation();
    
    useEffect(() => {
        if (!isLoggedIn) return;
        setIsLoading(true);
        moviesApi.getMovies()
        .then((res) => {
            setIsMovieChecked(JSON.parse(localStorage.getItem('checkbox')));
            setMovieInputText(JSON.parse(localStorage.getItem('search-text')));
            setMovies(res);
        })
        .catch((err) => console.log(err))
        .finally(() => {
            setIsLoading(false);
        });

        setIsLoading(true);
        api.getInitialMovies()
        .then((res) => {
            setSavedMovies(res);
        })
        .catch((err) => console.log(err))
        .finally(() => {
            setIsLoading(false);
        });
        
    }, [isLoggedIn])
    
    useEffect(() => {
        if (windowWidth <= widthMovies.WIDTH_760) {
            setMoviesNum(numMovies.MOVIES_NUM_5);
            setMoviesToLoad(numToLoadMovies.TO_LOAD_MOVIES_2);
        } else if (windowWidth <= widthMovies.WIDTH_1200){
            setMoviesNum(numMovies.MOVIES_NUM_8);
            setMoviesToLoad(numToLoadMovies.TO_LOAD_MOVIES_2);
        } else if (windowWidth <= widthMovies.WIDTH_1280
                || windowWidth >= widthMovies.WIDTH_1280) {
            setMoviesNum(numMovies.MOVIES_NUM_12);
            setMoviesToLoad(numToLoadMovies.TO_LOAD_MOVIES_3);
        }

        window.addEventListener('resize', updateWindowWidth);
        return () => window.removeEventListener('resize', updateWindowWidth);
    }, [windowWidth]);


    const handleMovieDelete = (movie) => {
        api.deleteMovies(movie._id)
        .then(() => {
            setSavedMovies((state) => state.filter((item) => item._id !== movie._id));
            setSearchSavedMovies((state) => state.filter((item) => item._id !== movie._id));
        })
        .catch((err) => {
            console.log(err);
        })

    }

    const handleMovieSave = (movie) => {
        api.addNewMovies(movie)
        .then((res) => {
            setSavedMovies([res, ...savedMovies]);
        })
        .catch((err) => console.log(err));
    } 

    const handleMoviesMap = (moviesList) => {
        const list = moviesList.map((movie) => {
            return <MoviesCard
                        movie={movie}
                        onSave={handleMovieSave}
                        onDelete={handleMovieDelete}
                        savedMovies={savedMovies}
                        key={movie.id || movie.movieId}
                    /> 
        });
        console.log('handleMoviesMap',list);
        return list
    };

    const filteredMoviesByDuration = (movies) => {
        return movies.filter((movie) => movie.duration < 40);
    };

    const handleSearch = (searchText) => {
        if (location.pathname === '/movies') {
            const searchMoviesList = movies.filter((movie) => movie.nameRU.toLowerCase().includes(searchText.toString().toLowerCase()) || 
            movie.nameEN.toLowerCase().includes(searchText.toString().toLowerCase()));
            setSearchMovies(searchMoviesList);
        } else if (location.pathname === '/saved-movies') {
            const searchMoviesList = savedMovies.filter((movie) => movie.nameRU.toLowerCase().includes(searchText.toString().toLowerCase()) || 
            movie.nameEN.toLowerCase().includes(searchText.toString().toLowerCase()));
            setSearchSavedMovies(searchMoviesList);
        }
    };

    const handleMovies = (movies) => {
        if (location.pathname === '/movies') {
            if (isMovieChecked) {
                return filteredMoviesByDuration(movies);
            } else if (!isMovieChecked) {
                console.log(movies);
                return movies;
            };
        } else if (location.pathname === '/saved-movies') {
            if (isSavedChecked) {
                return filteredMoviesByDuration(movies);
            } else if (!isSavedChecked) {
                return movies;
            };
        }
    }

    const moviesElements = isMovieSearch ? handleMoviesMap(handleMovies(searchMovies)) : handleMoviesMap(handleMovies(movies));
    const savedElements = isSavedSearch  ? handleMoviesMap(handleMovies(searchSavedMovies)) : handleMoviesMap(handleMovies(savedMovies));

    const handleCheckboxChange = () => {
        if (location.pathname === '/movies') {
            setIsMovieChecked(!isMovieChecked);
            localStorage.setItem('checkbox', !isMovieChecked)
        } else if (location.pathname === '/saved-movies') {
            setIsSavedChecked(!isSavedChecked);
        }
    };

    const updateWindowWidth = () => {
        setTimeout(() => setWindowWidth(window.innerWidth, 1000));
    }

    const handleShowMore = () => {
        setShowMore(true);
        setMoviesNum(moviesNum + moviesToLoad);
    };
    
    return (
        <section className='movies'>
            <SearchForm  
                handleCheckboxChange={handleCheckboxChange} 
                checked={location.pathname === '/movies' ? isMovieChecked : isSavedChecked} 
                handleSearch={handleSearch} 
                setIsMovieSearch={setIsMovieSearch} 
                setIsSavedSearch={setIsSavedSearch}
                inputText={location.pathname ==='/movies' ? movieInputText : ''}
            />
            {!isLoading && 
                (location.pathname === '/movies' 
                    ? 
                    (moviesElements.length === 0) 
                    : 
                    (savedElements.length === 0 )
                ) &&
                <p className='movies__text-not-found'>
                    Ничего не найдено
                </p>
            }
            
            {!isLoading ?
                    <MoviesCardList>
                        {location.pathname === '/movies' 
                            ? 
                            moviesElements.slice(0, moviesNum) 
                            : 
                            savedElements.slice(0, moviesNum)
                        } 
                        {location.pathname === '/movies' 
                            ? 
                            (showMore && moviesElements.slice(moviesNum, moviesNum))
                            : 
                            (showMore && savedElements.slice(moviesNum, moviesNum))
                        }
                    </MoviesCardList>
                    :   
                    <Preloader />
            }
            {!isLoading && 
                (location.pathname === '/movies' 
                    ? 
                    ((moviesElements.length > 0 ) && (moviesElements.length > moviesNum)) 
                    : 
                    ((savedElements.length > 0 ) && (savedElements.length > moviesNum))
                ) &&
                <button 
                    className='movies__btn'
                    onClick={handleShowMore}
                >
                    Ещё
                </button>
            }
        </section>
    )
}

export default Movies;