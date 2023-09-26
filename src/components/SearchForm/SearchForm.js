import './SearchForm.css';
import { useRef, useState, useEffect } from 'react';

function SearchForm({ handleCheckboxChange, checked, handleSearch, setIsSearch, inputText }) {
    const inputRef = useRef();
    const [textForm, setTextForm] = useState('');

    useEffect(() => {
        if (inputText) {
            setTextForm(inputText);
            setIsSearch(true);
            handleSearch(inputText);
        }
    }, [inputText]);

    const handleSubmit = (e) => {
        e.preventDefault()
        const searchText = inputRef.current.value;
        setIsSearch(true);
        localStorage.setItem('search-text', JSON.stringify(searchText));
        handleSearch(searchText);
    }
    
    const handleChange = () => {
        setTextForm(inputRef.current.value)
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
                    value={textForm}
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