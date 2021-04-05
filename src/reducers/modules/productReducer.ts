import * as actionTypes from "../../actions/types";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  amount: number;
}

export type ProductState = {
  products: IProduct[];
  singleProduct: IProduct | null;
};

const initialState: ProductState = {
  products: [],
  singleProduct: null,
};

export type IAction = {
  type: string;
  payload?: any;
};

const productReducer = (
  state: ProductState = initialState,
  action: IAction
): ProductState => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    case actionTypes.LOGOUT_SUCCESS:
      return initialState;
  }
  return state;
};

export default productReducer;
