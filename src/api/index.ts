import axios from "axios";
import config from "../config";
// console.log(config, "config from config");

const instance = axios.create({
  baseURL: config,
  headers: {
    "Content-Type": "application/json"
  },
});

const token = localStorage.getItem("token");

// console.log(token, 'token');

if (token) {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export default instance;
