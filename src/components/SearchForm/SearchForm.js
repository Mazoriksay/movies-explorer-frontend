import './SearchForm.css';

function SearchForm() {
    return(
        <form className='search' name='search-form'> 
            <div className='search__container'>
                <input 
                    className='search__input'
                    type='text'
                    name='movies'
                    placeholder='Фильмы' 
                    required={true}
                    minLength='2'
                    maxLength='40'
                >
                </input>
                <button className='search__btn' type='submit'>Поиск</button>
            </div>
            <div className='search__checkbox-container'>
                <label className='search__label'> 
                    <input className='search__checkbox' type='checkbox'></input>
                    <span className='search__slider'></span>
                </label>
                <p className='search__subtitle'>Короткометражки</p>
            </div>
            <div className='search__line'></div>
        </form>
    )
}

export default SearchForm;