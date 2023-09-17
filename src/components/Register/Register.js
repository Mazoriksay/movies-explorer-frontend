import Auth from "../Auth/Auth";

function Register() {
    return (
        <Auth 
            title='Добро пожаловать!'
            formName='signup'
            btnValue='Зарегистрироваться'
            linkSub='Уже зарегистрированы?'
            linkValue='/signin'
            linkText='Войти'
        />
    )
}

export default Register;