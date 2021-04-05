import { IAction, IProduct } from "./productReducer";
import * as actionTypes from "../../actions/types";

export type CartState = {
  cart: IProduct[];
};

const initialState: CartState = {
  cart: [],
};

const CartReducer = (
  state: CartState = initialState,
  action: IAction
): CartState => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART_SUCCESS:
      let addedProductIndex = state.cart.findIndex(function (product) {
        return product.id === action.payload.id;
      });
      if (addedProductIndex !== -1) {
        state.cart[addedProductIndex].amount++;
        return {
            ...state
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, amount: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART_SUCCESS:
      let removedProductIndex = state.cart.findIndex(function (product) {
        return product.id === action.payload.id;
      });
      if (state.cart[removedProductIndex].amount > 1) {
        state.cart[removedProductIndex].amount--;
        return {
            ...state
        };
      }
      state.cart.splice(removedProductIndex, 1);
      return {
          ...state
      };
      case actionTypes.LOGOUT_SUCCESS:
        return initialState
  }
  return state;
};

export default CartReducer;
