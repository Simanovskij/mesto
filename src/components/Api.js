export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getInitialData() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()])
  }

  _checkRepsonse(res) {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}users/me`, {
        headers: this._headers,
      })
      .then(res =>
        this._checkRepsonse(res)
      );
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, {
        headers: this._headers,
      })
      .then(res =>
        this._checkRepsonse(res)
      );
  }

  setUserInfo(item) {
    return fetch(`${this._baseUrl}users/me`, {
        headers: this._headers,
        method: 'PATCH',
        body: JSON.stringify({
          name: item.name,
          about: item.feature,
        }),
      })
      .then(res =>
        this._checkRepsonse(res)
      );
  }

  setNewCard(item) {
    return fetch(`${this._baseUrl}cards`, {
        headers: this._headers,
        method: 'POST',
        body: JSON.stringify({
          name: item.name,
          link: item.link,
        }),
      })
      .then(res =>
        this._checkRepsonse(res)
      );
  }

  delCard(item) {
    return fetch(`${this._baseUrl}cards/${item._id}`, {
        headers: this._headers,
        method: 'DELETE',
      })
      .then(res =>
        this._checkRepsonse(res)
      );
  }

  setLike(item) {
    return fetch(`${this._baseUrl}cards/likes/${item._id}`, {
        headers: this._headers,
        method: 'PUT',
      })
      .then(res =>
        this._checkRepsonse(res)
      );
  }

  delLike(item) {
    return fetch(`${this._baseUrl}cards/likes/${item._id}`, {
        headers: this._headers,
        method: 'DELETE',
      })
      .then(res =>
        this._checkRepsonse(res)
      );
  }
}