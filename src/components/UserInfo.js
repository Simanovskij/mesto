export default class UserInfo {
  constructor(nameSelector, featureSelector, avatarSelector) {
    this._userName = document.querySelector(nameSelector);
    this._userFeature = document.querySelector(featureSelector);
    this._userAvatar = document.querySelector(avatarSelector);
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

  setUserAvatar(userAvatar) {
    this._userAvatar.src = userAvatar;
  }
}