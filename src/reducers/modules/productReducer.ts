import * as actionTypes from "../../actions/types";

type IpriceList = {
  color: string;
  imageUrls: string[];
  sizes: any;
};
export interface IProduct {
  _id: string;
  name: string;
  price: number;
  description: string;
  shipping: string;
  image: string;
  amount: number;
  categoryId: string;
  extras: string[];
  priceList: IpriceList[];
}

type ISingleProduct = {
  product: IProduct,
  category: string;
  brand: string;
  seller: string;
  reviews: any
}

export type ProductState = {
  products: IProduct[];
  singleProduct: ISingleProduct | null;
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

    case actionTypes.FETCH_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        singleProduct: action.payload,
      };
    case actionTypes.LOGOUT_SUCCESS:
      return initialState;
  }
  return state;
};

export default productReducer;
