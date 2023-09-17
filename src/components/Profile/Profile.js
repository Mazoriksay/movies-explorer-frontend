import './Profile.css';

function Profile(){
    return (
        <section className='profile'>
            <h2 className='profile__title'>Привет, Никита!</h2>
            <form className='profile__form' name='profile'>
                <label className='profile__label'>
                    <p className='profile__text'>Имя</p>
                    <input 
                        className='profile__input'
                        type='text'
                        name='name'
                        placeholder='Ваше имя'
                        required={true}
                        minLength='2'
                        maxLength='40'
                    >   
                    </input>
                </label>
                <label className='profile__label'>
                    <p className='profile__text'>E-mail</p>
                    <input 
                        className='profile__input'
                        type='text'
                        name='email'
                        placeholder='E-mail'
                        required={true}
                        minLength='2'
                        maxLength='40'
                    >
                    </input>
                </label>
                <div className='profile__btn-container'>
                    <button type='submit' className='profile__btn profile__btn_type_submit'>Редактировать</button>
                    <button type='button' className='profile__btn profile__btn_type_exit'>Выйти из аккаунта</button>
                </div>
            </form>
        </section>
    )
}

export default Profile;