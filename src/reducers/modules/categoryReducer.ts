import { IAction, IProduct } from "./productReducer";
import * as actionTypes from "../../actions/types";

export type CategoryState = {
  categories: string[];
  singleCategory: IProduct[] | null;
};

const initialState: CategoryState = {
  categories: [],
  singleCategory: null,
};

const CategoryReducer = (
  state: CategoryState = initialState,
  action: IAction
): CategoryState => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      };

    case actionTypes.FETCH_CUSTOM_CATEGORY_SUCCESS:
      return {
        ...state,
        singleCategory: action.payload,
      };
    case actionTypes.LOGOUT_SUCCESS:
      return initialState;
  }
  return state;
};

export default CategoryReducer;
