import api from "../api";

const API_URL = "login"; // Put your login api here

interface LoginInput {
  email: string;
  password: string;
}

const login = async (loginInput: LoginInput) => {
  const res = await api.post(`${API_URL}`, loginInput);
  if (res.data.token) {
    localStorage.setItem("token", res.data.token);
  }
  return res.data;
};

const logout = () => {
  localStorage.removeItem("token");
};

const AuthService = {
  login,
  logout
};

export default AuthService;
