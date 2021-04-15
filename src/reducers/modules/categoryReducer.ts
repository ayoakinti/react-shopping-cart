import { IAction, IProduct } from "./productReducer";
import * as actionTypes from "../../actions/types";

export type ICategory = {
  _id: string;
  name: string;
};

export type CategoryState = {
  categories: ICategory[];
  brands: ICategory[];
  singleCollection: IProduct[] | null;
};

const initialState: CategoryState = {
  categories: [],
  brands: [],
  singleCollection: null,
};

const CategoryReducer = (
  state: CategoryState = initialState,
  action: IAction
): CategoryState => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload.categories,
      };

    case actionTypes.FETCH_ALL_BRANDS_SUCCESS:
      return {
        ...state,
        brands: action.payload.brands,
      };

    case actionTypes.FETCH_CUSTOM_CATEGORY_SUCCESS:
      return {
        ...state,
        singleCollection: action.payload.products,
      };

    case actionTypes.FETCH_CUSTOM_BRAND_SUCCESS:
      return {
        ...state,
        singleCollection: action.payload.products,
      };
    case actionTypes.LOGOUT_SUCCESS:
      return initialState;
  }
  return state;
};

export default CategoryReducer;
