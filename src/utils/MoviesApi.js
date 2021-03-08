class MoviesApi {
  constructor({ baseUrl, headers, credentials }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._errorServer = document.querySelector(".error-server");
  }

  // Получение ответа от сервера, иначе ошибка
  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка: ${res.status}`)); // если ошибка при запросе, переходим к catch
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
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Content-Type": "application/json",
  },
});
