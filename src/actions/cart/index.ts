import * as actionTypes from "../types";

import { IAction, IProduct } from "../../reducers/modules/productReducer";
import { DispatchType } from "../products";

export const addToCart = (product: IProduct) => async (dispatch: DispatchType) => {
  const action: IAction = {
    type: actionTypes.ADD_TO_CART_SUCCESS,
    payload: product,
  };
  dispatch(action);
  return product;
};

export const removeFromCart = (product: IProduct) => async (dispatch: DispatchType) => {
  const action: IAction = {
    type: actionTypes.REMOVE_FROM_CART_SUCCESS,
    payload: product,
  };
  dispatch(action);
  return product;
};

export const emptyCart = () => async (dispatch: DispatchType) => {
  const action: IAction = {
    type: actionTypes.EMPTY_CART_SUCCESS,
  };
  dispatch(action);
};
