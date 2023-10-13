import Auth from "../Auth/Auth";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../utils/MainApi';

function Login({ handleLogin }) {
    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    });

    const [isValid, setIsValid] = useState(true);

    const navigate = useNavigate();

    const handleFormValue = (name, value) => {
        setFormValue({
            ...formValue,
            [name]: value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formValue.email || !formValue.password) {
            return;
        }
        api.authorize(formValue).then(() => {
            handleLogin();
            setFormValue({email: '', password: ''});
            navigate('/movies', {replace: true});   
        })
        .catch((err) => {
            console.log(err);
            setIsValid(false)
        });
    }

    return (
        <Auth
            title='Рады видеть!'
            formName='signin'
            btnValue='Войти'
            linkSub='Ещё не зарегистрированы?'
            linkValue='/sign-up'
            linkText='Регистрация'
            handleFormValue={handleFormValue}
            handleSubmit={handleSubmit}
            isValid={isValid}
        />
    )
}

export default Login;
