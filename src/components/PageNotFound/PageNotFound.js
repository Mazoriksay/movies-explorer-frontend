import './PageNotFound.css';
import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <div className='page-not-found'>
            <div className='page-not-found__container'>
                <h1 className='page-not-found__title'>404</h1>
                <p className='page-not-found__subtitle'>Страница не найдена</p>
            </div>
            <Link to='/' className='page-not-found__link'>Назад</Link>
        </div>
    )
}

export default PageNotFound;