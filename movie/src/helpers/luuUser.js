const user = "USER";
const StorageUser = {
  setUser(TTUser) {
    localStorage.setItem(user, TTUser);
  },
  getUser() {
    return localStorage.getItem(user);
  },
  removeUser() {
    localStorage.setItem(user, "");
  },
};

export default StorageUser;
