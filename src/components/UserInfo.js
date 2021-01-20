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

  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userFeature.textContent = data.about;
  }

  setUserAvatar(data) {
    this._userAvatar.src = data.avatar;
  }
}