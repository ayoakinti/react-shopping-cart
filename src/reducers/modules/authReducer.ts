import * as actionTypes from "../../actions/types";

export type IUser = {
  firstName: string;
  lastName: string;
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
    case actionTypes.LOGOUT_SUCCESS:
      return initialState
  }
  return state;
};

export default authReducer;
