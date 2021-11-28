export default class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
        method: 'GET',
        headers: this._headers,
      })
      .then((res) => {
        return this._checkResponse(res)
      });
  }

  setUserInfoApi(userInfo) {
    return fetch(`${this._url}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: userInfo.name,
          occupation: userInfo.occupation
        })
      })
      .then((res) => {
        return this._checkResponse(res)
      });
  }

  handleUserAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          avatar: data.userAvatar,
        })
      })
      .then((res) => {
        return this._checkResponse(res)
      });
  }

  getOwnerCards() {
    return fetch(`${this._url}/cards`, {
        method: 'GET',
        headers: this._headers
      })
      .then((res) => {
        return this._checkResponse(res)
      });
  }

  addUserCard(data) {
    return fetch(`${this._url}/cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          link: data.link
        })
      })
      .then((res) => {
        return this._checkResponse(res)
      });
  }

  like(data) {
    return fetch(`${this._url}/cards/${data._id}`, {
        method: 'PUT',
        headers: this._headers
      })
      .then((res) => {
        return this._checkResponse(res)
      });
  }

  dislike(data) {
    return fetch(`${this._url}/cards/${data._id}`, {
        method: 'DELETE',
        headers: this._headers
      })
      .then((res) => {
        return this._checkResponse(res)
      });
  }

  delete(data) {
    return fetch(`${this._url}/cards/${data._id}`, {
        method: 'DELETE',
        headers: this._headers
      })
      .then((res) => {
        return this._checkResponse(res)
      });
  }

  getAllData() {
    return Promise.all([this.getOwnerCards(), this.getUserInfo()])
  }
}