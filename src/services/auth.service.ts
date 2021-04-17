// import { IData } from "./../actions/auth/index";
import instance from "../api";
import api from "../api";

// const API_URL = "login"; // Put your login api here

export interface LoginInput {
  email: string;
  password: string;
}

export interface IName {
  firstName: string;
  lastName: string;
}

export interface RegisterInput {
  name: IName;
  email: string;
  phone?: number;
  password: string;
  address?: string[];
}

const login = async (loginInput: LoginInput) => {
  const res = await api.post("/buyer/login", loginInput);
  const token = res.data.token;
  // console.log(token, 'token after login')
  localStorage.setItem("token", token);
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;

  return res.data;
};

const register = async (registerInput: RegisterInput) => {
  const res = await api.post("/buyer", registerInput);
  const token = res.data.token;
  localStorage.setItem("token", token);
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;

  return res.data;
};

const logout = () => {
  localStorage.removeItem("token");
  instance.defaults.headers.common.Authorization = `Bearer null`;
};

const AuthService = {
  login,
  register,
  logout,
};

export default AuthService;
