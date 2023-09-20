import Auth from "../Auth/Auth";

function Login() {
    return (
        <Auth
            title='Рады видеть!'
            formName='signin'
            btnValue='Войти'
            linkSub='Ещё не зарегистрированы?'
            linkValue='/signup'
            linkText='Регистрация'
        />
    )
}

export default Login;
