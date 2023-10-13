import Auth from '../Auth/Auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../utils/MainApi';

function Register({ handleLogin }) {
    const navigate = useNavigate();
    
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [isValid, setIsValid] = useState(true);

    const handleFormValue = (name, value) => {
        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        api.register(formValue).
        then(() => {
            api.authorize(formValue).then(() => {
                handleLogin();
                setFormValue({email: '', password: '', name: ''});
                navigate('/movies', {replace: true});
            })
        })
        .catch(() => {
            setIsValid(false);
        })
    }

    return (
        <Auth 
            title='Добро пожаловать!'
            formName='signup'
            btnValue='Зарегистрироваться'
            linkSub='Уже зарегистрированы?'
            linkValue='/sign-in'
            linkText='Войти'
            handleSubmit={handleSubmit}
            handleFormValue={handleFormValue}
            isValid={isValid}
        />
    )
}

export default Register;