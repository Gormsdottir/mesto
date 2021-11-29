export default class UserInfo {
  constructor(userSelectors) {
    this._nameElement = document.querySelector(userSelectors.name);
    this._infoElement = document.querySelector(userSelectors.about);
    this._profileAvatar = document.querySelector(userSelectors.avatar);
    this._name = null;
    this._about = null;
  }

  // получение данных пользователя в форму
  getUserInfo() {
    this._userData = {
      name: this._nameElement.textContent,
      about: this._infoElement.textContent
    };

    return this._userData;
  }
  
  //сохранение новых данных пользователя в форме
  setUserInfo(data) {
    this._nameElement.textContent = data.name;
    this._infoElement.textContent = data.about;
    this.setUserAvatar(data)
  }

  setUserAvatar(data) {
    this._profileAvatar.src = data.avatar;
  }
}