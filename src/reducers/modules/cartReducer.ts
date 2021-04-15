import { IAction, IProduct } from "./productReducer";
import * as actionTypes from "../../actions/types";

export type ICart = {
  _id: string;
  color: string;
  productId: string;
  size: string;
  quantity: number;
  image: string;
  sizeObject: {
    size: string;
    price: number;
    quantity: number;
  };
  name: string;
};

export type CartState = {
  cart: ICart[];
};

const initialState: CartState = {
  cart: [],
};

const CartReducer = (
  state: CartState = initialState,
  action: IAction
): CartState => {
  switch (action.type) {
    case actionTypes.FETCH_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload.cart,
      };
    case actionTypes.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload.cart,
      };
    case actionTypes.REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload.cart,
      };
    case actionTypes.LOGOUT_SUCCESS:
      return initialState;
  }
  return state;
};

export default CartReducer;
