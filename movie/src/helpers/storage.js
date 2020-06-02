const keyToken = "LOGIN_TOKEN";
const User = "USER";
const Storage = {
  setToken(token) {
    localStorage.setItem(keyToken, token);
  },
  getToken() {
    return localStorage.getItem(keyToken);
  },
  removeToken() {
    localStorage.setItem(keyToken, "");
  },
};

export default Storage;
