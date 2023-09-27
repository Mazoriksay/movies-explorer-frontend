import './SearchForm.css';
import { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function SearchForm({ handleCheckboxChange, checked, handleSearch, setIsSavedSearch, setIsMovieSearch, inputText}) {
    const inputRef = useRef();
    const location = useLocation();
    const [savedTextForm, setSavedTextForm] = useState('');
    const [textForm, setTextForm] = useState('');
    
    useEffect(() => {
        if (location.pathname === '/saved-movies') {
            setSavedTextForm('');
            handleSearch('');
        } else if (location.pathname === 'movies') {
            const text = JSON.parse(localStorage.getItem('search-text'));
            setIsMovieSearch(text);
            handleSearch(text)
        }
    }, [location]);

    useEffect(() => {
        if (inputText) {
            setIsMovieSearch(true);
            setTextForm(inputText);
            handleSearch(inputText);
        }
    }, [inputText]);

    const handleSubmit = (e) => {
        e.preventDefault()
        const searchText = inputRef.current.value;
        if (location.pathname === '/movies') {
            localStorage.setItem('search-text', JSON.stringify(searchText));
            setIsMovieSearch(true);
        } else if (location.pathname === '/saved-movies') {
            setIsSavedSearch(true);
        }
        handleSearch(searchText);
    }

    const handleChange = () => {
        if (location.pathname === '/saved-movies') {
            setSavedTextForm(inputRef.current.value);
        } else if (location.pathname === '/movies') {
            setTextForm(inputRef.current.value);
        }
    }
    
    return(
        <form className='search' name='search-form' onSubmit={handleSubmit}> 
            <div className='search__container'>
                <input 
                    ref={ inputRef }
                    className='search__input'
                    type='text'
                    name='movies'
                    placeholder='Фильмы' 
                    minLength='0'
                    maxLength='40'
                    value={location.pathname === '/movies' ? textForm : savedTextForm}
                    onChange={handleChange}
                >
                </input>
                <button className='search__btn' type='submit'>Поиск</button>
            </div>
            <div className='search__checkbox-container'>
                <label className='search__label'> 
                    <input className='search__checkbox' type='checkbox' name='filter' checked={checked} onChange={handleCheckboxChange}></input>
                    <span className='search__slider'></span>
                </label>
                <p className='search__subtitle'>Короткометражки</p>
            </div>
            <div className='search__line'></div>
        </form>
    )
}

export default SearchForm;