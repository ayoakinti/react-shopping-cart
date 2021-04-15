import { IRemoveFromCart } from './../../services/cart.service';
import * as actionTypes from "../types";

import { IAction } from "../../reducers/modules/productReducer";
import { DispatchType } from "../products";
import CartService, { IAddToCart } from "../../services/cart.service";

export const fetchCart = () => async (dispatch: DispatchType) => {
  const data = await CartService.fetchCart();
  const action: IAction = {
    type: actionTypes.FETCH_CART_SUCCESS,
    payload: {
      cart: data.cart
    },
  };
  dispatch(action);
  return data;
};

export const addToCart = (product: IAddToCart) => async (dispatch: DispatchType) => {
  const data = await CartService.addToCart(product);
  const action: IAction = {
    type: actionTypes.ADD_TO_CART_SUCCESS,
    payload: {
      cart: data.cart
    }
  }

  dispatch(action);
  return data;
}

export const removeFromCart = (product: IRemoveFromCart) => async (dispatch: DispatchType) => {
  const data = await CartService.removeFromCart(product);
  const action: IAction = {
    type: actionTypes.REMOVE_FROM_CART_SUCCESS,
    payload: {
      cart: data.cart
    }
  }

  dispatch(action);
  return data;
}
