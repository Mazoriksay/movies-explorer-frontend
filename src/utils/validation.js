import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function useValidation() {
    const [errors, setErrors] = useState({});
    const location = useLocation();
    function validate(fieldName, value) {
        let fieldErrors = {};

        if (fieldName === 'email') {
            if (!value) {
                fieldErrors  = { [fieldName]: 'Email обязателен' };
            } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)) {
                fieldErrors = { [fieldName]: 'Некорректный email' };
            } else {
                fieldErrors = { [fieldName]: ''}
            }
        }

        if (fieldName === 'password') {
            if (!value) {
                fieldErrors = { [fieldName]: 'Введите пароль' };
            } else if (value.length < 8) {
                fieldErrors = { [fieldName]: 'Пароль должен содержать минимум 8 символов' };
            } else {
                fieldErrors = { [fieldName]: ''}
            }
        }

        if (fieldName === 'name') {
            if (!value) {
                fieldErrors = { [fieldName]: 'Имя не указано' };
            } else if (value.length < 2) {
                fieldErrors = { [fieldName]: 'Имя должно содержать минимум 2 символа' };
            } else {
                fieldErrors = { [fieldName]: ''};
            }
        }
        
        setErrors((prevErrors) => ({ ...prevErrors, ...fieldErrors }));
        
    }
    

    return {errors, validate};
}

export default useValidation;
