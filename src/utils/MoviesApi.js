import { definitionError } from './definitionError';

class MoviesApi {
  constructor({ baseUrl, headers, credentials }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._errorServer = document.querySelector('.error-server');
  }

  _getResponseData(res) {
    return definitionError(res);
  }

  // Получение начальных карточек
  getAllCards() {
    return fetch(`${this._baseUrl}`, {
      headers: this._headers,
    }).then((res) => {
      return this._getResponseData(res);
    });
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  },
});
