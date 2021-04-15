import axios from "axios";
import config from "../config";
// console.log(config, "config from config");

const token = localStorage.getItem("token");

const instance = axios.create({
  baseURL: config,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  },
});

// console.log(token, 'token');

// if (token) {
//   instance.defaults.headers.common.Authorization = token;
// }

export default instance;
