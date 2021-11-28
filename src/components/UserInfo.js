export default class UserInfo {
  constructor(userSelectors) {
    this._nameElement = document.querySelector(userSelectors.name);
    this._infoElement = document.querySelector(userSelectors.occupation);
    this._profileAvatar = document.querySelector(userSelectors.avatar);
    this._name = null;
    this._occupation = null;
  }

  // получение данных пользователя в форму
  getUserInfo() {
    this._userData = {
      name: this._nameElement.textContent,
      occupation: this._infoElement.textContent
    };

    return this._userData;
  }
  
  //сохранение новых данных пользователя в форме
  setUserInfo(data) {
    this._nameElement.textContent = data.name;
    this._infoElement.textContent = data.occupation;
    this.setUserAvatar(data)
  }

  setUserAvatar(data) {
    this._profileAvatar.src = data.avatar;
  }
}