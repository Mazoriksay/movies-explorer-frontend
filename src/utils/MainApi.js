class Api {
    constructor({ baseUrl, headers }){
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _checkStatus(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    _request(url, options) {
        return fetch(this._baseUrl + url, options).then(this._checkStatus);
    }

    checkToken() {
        return this._request(`/users/me`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                ...this._headers,
            }
        });
    }

    getUserInfo() {
        return this._request(`/users/me`, {
            credentials: 'include',
            headers: this._headers
        });
    }

    register({name, email, password}) {
        return this._request('/signup', {
            method: 'POST',
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({name, email, password}) 
        });
    }

    authorize({email, password}) {
        return this._request('/signin', {
            method: 'POST',
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({email, password}) 
        })
        .then(({data}) => {
            localStorage.setItem('userId', data._id); 
        })
    }

    setProfileInfo({name, email}) {
        return this._request(`/users/me`, {
            method: 'PATCH',
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                email: email
            })
        });
    }

    getInitialMovies() {
        return this._request(`/movies`, {
            credentials: 'include',
            headers: this._headers
        })
    }
    
    addNewMovies(movieBody) {
        return this._request(`/movies`, {
            method: 'POST',
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({
                ...movieBody,
            })
        });
    }

    deleteMovies(id) {
        return this._request(`/movies/${id}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: this._headers
        });
    }


}

export const api = new Api({
    baseUrl: 'https://api.movies-explorer.skif.nomoredomainsicu.ru',
    headers: {
        'Content-Type': 'application/json'
    }
});