import './Profile.css';
import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useValidation from '../../utils/validation';

function Profile({ onSignOut, handleUpdateUser, isValid, submitText }){
    const [statusButton, setStatusButton] = useState(true);
    const [isRepeat, setIsRepeat] = useState(false);

    const { errors, validate } = useValidation();

    const currentUser = useContext(CurrentUserContext);

    const [formValue, setFormValue] = useState({
        name: '',
        email: ''
    });


    useEffect(() => {
        setStatusButton(!isFormValid);
    }, [errors, isFormValid]);

    useEffect(() => {
        setFormValue({
            name: currentUser.name,
            email: currentUser.email
        });

    }, [currentUser]);

    useEffect(() => {
        if (currentUser.name === formValue.name && currentUser.email === formValue.email) {
            setIsRepeat(true);
        } else {
            setIsRepeat(false);
        }

    }, [currentUser, formValue.name, formValue.email]);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        validate(name, value);
        setFormValue({
            ...formValue,
            [name]: value
        });
    };

    const handleSubmit = (e) => {  
        e.preventDefault();  
        handleUpdateUser(formValue);
    };

    const isFormValid = Object.values(errors).every(error => error === '');

    return (
        <section className='profile'>
            <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
            <form className='profile__form' name='profile' onSubmit={handleSubmit} >
                <label className='profile__label'>
                    <p className='profile__text'>Имя</p>
                    {errors.name && <span className='profile__error'>{errors.name}</span>}
                    <input 
                        className='profile__input'
                        type='text'
                        name='name'
                        placeholder='Ваше имя'
                        required={true}
                        minLength='2'
                        maxLength='40'
                        value={formValue.name}
                        onChange={handleChange}
                    >   
                    </input>
                </label>
                <label className='profile__label'>
                    <p className={'profile__text'}>E-mail</p>
                    {errors.email && <span className='profile__error'>{errors.email}</span>}
                    <input 
                        className='profile__input'
                        type='text'
                        name='email'
                        placeholder='E-mail'
                        required={true}
                        minLength='2'
                        maxLength='40'
                        value={formValue.email}
                        onChange={handleChange}
                    >
                    </input>
                </label>
                <div className='profile__btn-container'>
                    <p className={'profile__submit-text' + (isValid ? ' profile__submit-text_type_succes' : ' profile__submit-text_type_denied')}>{submitText}</p>
                    <button 
                        type='submit' 
                        className='profile__btn profile__btn_type_submit' 
                        disabled={statusButton || isRepeat}
                    >
                        Редактировать
                    </button>
                    <button type='button' className='profile__btn profile__btn_type_exit' onClick={onSignOut}>Выйти из аккаунта</button>
                </div>
            </form>
        </section>
    )
}

export default Profile;