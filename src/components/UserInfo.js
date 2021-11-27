export default class UserInfo {
  constructor({userNameSelector, userDataSelector}) {
    this._nameElement = userNameSelector;
    this._infoElement = userDataSelector;
    this._name = null;
    this._occupation = null;
  }

  getUserInfo() {
    return {
      name: this._name,
      occupation: this._occupation
    }
  }
  
  setUserInfo({name, occupation}) {
    name && (this._name = name);
    occupation && (this._occupation = occupation);
  }

  updateUserInfo() {
    this._nameElement.textContent = this._name;
    this._infoElement.textContent = this._occupation;
  }
}