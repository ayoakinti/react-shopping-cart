import * as actionTypes from "../../actions/types";

export type IUser = {
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
};

export type AuthState = {
  token: string | null;
  user: IUser | null;
  isLoggedIn: boolean;
};

type IPayload = {
  token: string;
  user: object;
};

const initialState: AuthState = {
  token: localStorage.getItem("token") || null,
  user: null,
  isLoggedIn: false,
};

type AuthAction = {
  type: string;
  payload: IPayload;
};

const authReducer = (state: AuthState = initialState, action: AuthAction) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        isLoggedIn: true,
      };
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        isLoggedIn: true,
      };
    case actionTypes.LOGOUT_SUCCESS:
      return {
        token: null,
        user: null,
        isLoggedIn: false,
      };
  }
  return state;
};

export default authReducer;
