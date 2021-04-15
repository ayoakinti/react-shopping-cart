// import { IData } from "./../actions/auth/index";
import api from "../api";

// const API_URL = "login"; // Put your login api here

export interface LoginInput {
  email: string;
  password: string;
}

export interface RegisterInput {
  name: {
    firstName: string,
    lastName: string
  },
  email: string,
  phone: number,
  password: string,
  address: string[]
}

const login = async (loginInput: LoginInput) => {
  const res = await api.post("/buyer/login", loginInput);
  const token = res.data.token;
  localStorage.setItem('token', token);

  return res.data;
};

const register = async (registerInput: RegisterInput) => {
  const res = await api.post("/buyer", registerInput);

  return res.data;
};

const logout = () => {
  localStorage.removeItem("token");
};

const AuthService = {
  login,
  register,
  logout,
};

export default AuthService;
