import { definitionError } from './definitionError';

class MainApi {
  constructor({ baseUrl, headers, credentials }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._credentials = credentials;
    this._errorServer = document.querySelector('.error-server');
  }

  // Получение ответа от сервера, иначе ошибка
  _getResponseData(res) {
    return definitionError(res);
  }

  // Получение юзером всех своих сохранненых карточек
  getUserMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
      credentials: this._credentials,
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  // Сохранение на сервере фильма юзера
  saveMovieToServer(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
      credentials: this._credentials,
      method: 'POST',
      body: JSON.stringify(movie),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  // Удаление на сервере фильма юзера
  deleteMovieToServer(movieDelId) {
    return fetch(`${this._baseUrl}/movies/${movieDelId}`, {
      headers: this._headers,
      credentials: this._credentials,
      method: 'DELETE',
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  // Получение с сервера информация о пользователе
  getUserInfoFromServer() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      credentials: this._credentials,
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  // Сохранение на сервере информация о пользователе
  saveUserInfoToServer(newUserInfo) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      credentials: this._credentials,
      method: 'PATCH',
      body: JSON.stringify(newUserInfo),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }
}

export const mainApi = new MainApi({
  baseUrl: 'http://localhost:3000', //"api.ialse-movies.students.nomoredomains.rocks",
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
});
