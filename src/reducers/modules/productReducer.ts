import * as actionTypes from "../../actions/types";

export type IProduct = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

export type ProductState = {
  products: IProduct[];
  singleProduct: IProduct | null;
};

const initialState: ProductState = {
  products: [],
  singleProduct: null,
};

export type ProductAction = {
  type: string;
  payload: any;
};

const productReducer = (state: ProductState = initialState, action: ProductAction) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload
      };
  }
  return state;
};

export default productReducer;
