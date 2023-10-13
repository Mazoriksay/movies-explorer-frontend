import './Auth.css';
import logo from '../../images/logo.svg';
import { useState, useEffect } from 'react';
import { Link, useLocation} from 'react-router-dom';
import useValidation from '../../utils/validation';

function Auth({ title, formName, btnValue, linkSub, linkValue, linkText, handleFormValue, handleSubmit, isValid }) {
    const [statusButton, setStatusButton] = useState(true);
    
    const location  = useLocation();
   
    const { errors, validate } = useValidation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        validate(name, value);
        handleFormValue(name, value);
    }

    const isFormValid = Object.values(errors).every(error => error === '');

    useEffect(() => {
        setStatusButton(!isFormValid);
    }, [errors, isFormValid]);

    return (
        <section className='auth'>
            <div className='auth__container'>
                <Link to='/' className='auth__link'>
                    <img src={logo} className='auth__logo' alt='Логотип'></img>
                </Link>
                <h2 className='auth__title'>{title}</h2>
                <form className='auth__form' name={formName} onSubmit={handleSubmit}>
                    {location.pathname === '/sign-up' ?
                        <label className='auth__label'>
                            <p className='auth__text'>Имя</p>
                            <input 
                                className='auth__input'
                                type='text'
                                name='name'
                                placeholder='Ваше имя'
                                required={true}
                                minLength='2'
                                maxLength='40'
                                onChange={handleChange}
                            >
                            </input>
                            {errors.name && <span className='auth__error'>{errors.name}</span>}
                        </label>
                        :
                        ''
                    }
                    <label className='auth__label'>
                        <p className='auth__text'>E-mail</p>
                        <input 
                            className='auth__input'
                            type='text'
                            name='email'
                            placeholder='E-mail'
                            required={true}
                            minLength='2'
                            maxLength='40'
                            onChange={handleChange}
                        >
                        </input>
                        {errors.email && <span className='auth__error'>{errors.email}</span>}
                    </label>
                    <label className='auth__label'>
                        <p className='auth__text'>Пароль</p>
                        <input 
                            className='auth__input'
                            type='password'
                            name='password'
                            placeholder='Пароль'
                            required={true}
                            minLength='8'
                            maxLength='40'
                            onChange={handleChange}
                        >
                        </input>
                        {errors.password && <span className='auth__error'>{errors.password}</span>}
                    </label>
                    <div  className='auth__button-container'>
                        <p className='auth__server-error'>{!isValid ? 'Произошла ошибка' : ''}</p>
                        <input
                            className='auth__button'
                            type='submit'
                            value={btnValue}
                            disabled = {(Object.keys(errors).length === (location.pathname === '/sign-up' ? 3 : 2)) ? statusButton : true}
                        >
                        </input>
                    </div>
                </form>
                <p className='auth__subtitle'>{linkSub}<Link to={linkValue} className='auth__link'>{linkText}</Link></p>
            </div>
        </section>
    )
}

export default Auth;