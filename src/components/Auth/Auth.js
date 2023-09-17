import './Auth.css';
import logo from '../../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';

function Auth({ title, formName, btnValue, linkSub, linkValue, linkText }) {
    const location  = useLocation();
    
    return (
        <section className='auth'>
            <div className='auth__container'>
                <Link to='/' className='auth__link'>
                    <img src={logo} className='auth__logo' alt='Логотип'></img>
                </Link>
                <h2 className='auth__title'>{title}</h2>
                <form className='auth__form' name={formName}>
                    {location.pathname === '/signup' ?
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
                            >
                            </input>
                            <span className='auth__error'>Что-то пошло не так...</span>
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
                        >
                        </input>
                        <span className='auth__error'>Что-то пошло не так...</span>
                    </label>
                    <label className='auth__label'>
                        <p className='auth__text'>Пароль</p>
                        <input 
                            className='auth__input'
                            type='password'
                            name='password'
                            placeholder='Пароль'
                            required={true}
                            minLength='6'
                            maxLength='40'
                        >
                        </input>
                        <span className='auth__error'>Что-то пошло не так...</span>
                    </label>
                    <input
                        className='auth__button'
                        type='submit'
                        value={btnValue}
                    >
                    </input>
                </form>
                <p className='auth__subtitle'>{linkSub}<Link to={linkValue} className='auth__link'>{linkText}</Link></p>
            </div>
        </section>
    )
}

export default Auth;