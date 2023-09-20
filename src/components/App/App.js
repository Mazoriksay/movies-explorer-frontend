import { useState, useEffect } from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFound/PageNotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const location = useLocation();
    return (
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
                    path='/signup'
                    element={<Register/>}
                />
                <Route
                    path='/signin'
                    element={<Login/>}
                />
                <Route
                    path='/profile'
                    element={<Profile />}
                />
                <Route 
                    path='/movies'
                    element={<Movies />}
                />
                <Route
                    path='/saved-movies'
                    element={<SavedMovies />}
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
    );
}

export default App;
