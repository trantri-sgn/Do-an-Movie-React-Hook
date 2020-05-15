import axios from "axios";

const BASE_URL = "http://movie0706.cybersoft.edu.vn";

const api = {
  call() {
    return axios.create({
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  callWithAuth() {
    //cau hinh header
    return axios.create({
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer my-token",
      },
    });
  },
};
export default api;
