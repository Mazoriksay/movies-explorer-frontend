import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFound/PageNotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { api } from '../../utils/MainApi';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [isValidProfile, setIsValidProfile] = useState(true);
    const [submitText, setSubmitText] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) return;
        api.getUserInfo()
        .then((res) => {
            setCurrentUser(res);
        })
        .catch((err) => console.log(err))
    }, [isLoggedIn])
    

    useEffect(() => {
        handleTokenCheck();
    }, []);

    useEffect(() => {
        if (isValidProfile) {
            setSubmitText('');
        }
    }, [isValidProfile]);

    const handleTokenCheck = () => {
        const jwt = localStorage.getItem('userId');
        if (jwt) {
            api.checkToken(jwt).then((res) => {
                if (res) {
                    setIsLoggedIn(true);
                    navigate(location.pathname, {replace: true});
                }
            })
            .catch((err) => {
                setIsLoggedIn(false);
                console.log(err);
            });
        }
    }

    const handleLogin = () => {
        setIsLoggedIn(true);
    }

    const handleUpdateUser = (data) => {
        api.setProfileInfo(data)
        .then((res) => {
            setCurrentUser(res);
            setSubmitText('Данные профиля успешно обновлены!');
        })
        .catch((err) => {
            setIsValidProfile(false);
            setSubmitText('При обновлении профиля произошла ошибка.');
            console.log(err);
        });
    }

    const signOut = () => {
        localStorage.removeItem('userId');
        setIsLoggedIn(false);
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="App">
                { 
                    location.pathname === '/' || 
                    location.pathname === '/movies' || 
                    location.pathname === '/saved-movies' || 
                    location.pathname === '/profile' 
                    ? 
                    <Header isLoggedIn={isLoggedIn} /> 
                    : ''
                }
                <Routes>
                    <Route 
                        path='/'
                        element={<Main/>} 
                    />
                    <Route
                        path='/sign-up'
                        element={<Register/>}
                    />
                    <Route
                        path='/sign-in'
                        element={<Login
                                    handleLogin={handleLogin}
                                />}
                    />
                    <Route
                        path='/profile'
                        element={<ProtectedRoute 
                                    element={Profile}
                                    isLoggedIn={isLoggedIn}
                                    onSignOut={signOut}
                                    handleUpdateUser={handleUpdateUser}
                                    isValid={isValidProfile}
                                    submitText={submitText}
                                />}
                    />
                    <Route 
                        path='/movies'
                        element={<ProtectedRoute 
                                    element={Movies}
                                    isLoggedIn={isLoggedIn}
                                />}
                    />
                    <Route
                        path='/saved-movies'
                        element={<ProtectedRoute 
                                    element={Movies}
                                    isLoggedIn={isLoggedIn}
                                />}
                    />
                    <Route 
                        path='*'
                        element={<PageNotFound/>}
                    />
                </Routes>

                { 
                    location.pathname === '/' || 
                    location.pathname === '/movies' || 
                    location.pathname === '/saved-movies' || 
                    location.pathname === 'profile' 
                    ? 
                    <Footer />
                    : ''
                }
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
