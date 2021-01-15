export default class UserInfo {
  constructor(nameSelector, featureSelector) {
    this._userName = document.querySelector(nameSelector);
    this._userFeature = document.querySelector(featureSelector)
  }

  getUserInfo() {
    const userName = this._userName.textContent;
    const userFeature = this._userFeature.textContent;
    return { name: userName, feature: userFeature }
  }

  setUserInfo({ userName, userFeature }) {
    this._userName.textContent = userName;
    this._userFeature.textContent = userFeature;
  }
}