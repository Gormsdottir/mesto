export default class UserInfo {
  constructor({userNameSelector, userDataSelector}) {
    this._nameElement = document.querySelector(userNameSelector);
    this._infoElement = document.querySelector(userDataSelector);
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
  }
}