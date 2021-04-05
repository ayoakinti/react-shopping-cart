// import { IData } from "./../actions/auth/index";
// import api from "../api";

// const API_URL = "login"; // Put your login api here

interface LoginInput {
  email: string;
  password: string;
}

const login = async (loginInput: LoginInput) => {
  // const res = await api.post(`${API_URL}`, loginInput);
  if (
    loginInput.email === "reactecommerce@gmail.com" &&
    loginInput.password === "ecommerce"
  ) {
    localStorage.setItem("token", "Token authorized");
    const data: any = {
      token: "Token authorized",
      user: {
        firstName: "React",
        lastName: "Tester",
        email: "reactecommerce@gmail.com",
      },
    };
    return data;
  }
};

const logout = () => {
  localStorage.removeItem("token");
};

const AuthService = {
  login,
  logout,
};

export default AuthService;
