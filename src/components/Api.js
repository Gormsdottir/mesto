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
    console.log(userInfo)
    return fetch(`${this._url}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: userInfo.name,
          about: userInfo.about
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
          avatar: data.avatar,
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
          name: data.title,
          link: data.image
        })
      })
      .then((res) => {
        return this._checkResponse(res)
      });
  }

  like(id) {
    return fetch(this._url + `/cards/likes/${id}`, {
      method: 'PUT',
      headers: this._headers
    })
    .then(this._checkResponse)
  }

  dislike(id) {
    return fetch(this._url + `/cards/likes/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._checkResponse)
  }

  delete(dataId) {
    return fetch(`${this._url}/cards/${dataId}`, {
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