import axios from "axios";
import config from "../config";
// console.log(config, "config from config");

const instance = axios.create({
  baseURL: config,
  headers: {
    "Content-Type": "application/json",
  },
});

const token = localStorage.getItem("token");

if (token) {
  instance.defaults.headers.common.Authorization = token;
}

export default instance;
