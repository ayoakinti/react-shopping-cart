import * as actionTypes from "../types";
import CategoryService from "../../services/categories.service";

import { IAction } from "../../reducers/modules/productReducer";
import { DispatchType } from "../products";

export const fetchAllCategories = () => async (dispatch: DispatchType) => {
  const data = await CategoryService.fetchAllCategories();
  const action: IAction = {
    type: actionTypes.FETCH_ALL_CATEGORIES_SUCCESS,
    payload: data,
  };
  dispatch(action);
  return data;
};

export const fetchCustomCategories = (category: string) => async (
  dispatch: DispatchType
) => {
  const data = await CategoryService.fetchCustomCategories(category);
  const action: IAction = {
    type: actionTypes.FETCH_CUSTOM_CATEGORY_SUCCESS,
    payload: data,
  };
  dispatch(action);
  return data;
};
