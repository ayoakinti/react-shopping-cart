import { LoginInput, RegisterInput } from './../../services/auth.service';
import * as actionTypes from "../types";
import AuthService from "../../services/auth.service";

type AuthAction = {
  type: string;
  payload ?: any;
};

// export type IData = {
//   user: object;
//   token: string;
// };

type DispatchType = (args: AuthAction) => AuthAction;

export const login = (loginInput: LoginInput) => async (
  dispatch: DispatchType
) => {
  const data = await AuthService.login(loginInput);
  const action: AuthAction = {
    type: actionTypes.LOGIN_SUCCESS,
    payload: {
      user: data.buyer,
      token: data.token
    },
  };
  dispatch(action);
  return data;
};

export const register = (registerInput: RegisterInput) => async (
  dispatch: DispatchType
) => {
  const data = await AuthService.register(registerInput);
  const action: AuthAction = {
    type: actionTypes.REGISTER_SUCCESS,
    payload: {
      user: data.buyer,
      token: data.token
    },
  };
  localStorage.setItem('token', data.token);
  dispatch(action);
  return data;
};

export const logout = () => async (
  dispatch: DispatchType
) => {
  const data = await AuthService.logout();
  const action: AuthAction = {
    type: actionTypes.LOGOUT_SUCCESS,
  };
  dispatch(action);
  return data;
};
