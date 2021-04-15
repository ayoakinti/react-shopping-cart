import * as actionTypes from "../types";
import CategoryService from "../../services/categories.service";

import { IAction } from "../../reducers/modules/productReducer";
import { DispatchType } from "../products";

export const fetchAllCategories = () => async (dispatch: DispatchType) => {
  const data = await CategoryService.fetchAllCategories();
  const action: IAction = {
    type: actionTypes.FETCH_ALL_CATEGORIES_SUCCESS,
    payload: {
      categories: data.categories
    },
  };
  dispatch(action);
  return data;
};

export const fetchAllBrands = () => async (dispatch: DispatchType) => {
  const data = await CategoryService.fetchAllBrands();
  const action: IAction = {
    type: actionTypes.FETCH_ALL_BRANDS_SUCCESS,
    payload: {
      brands: data.brands
    },
  };
  dispatch(action);
  return data;
};

export const fetchCustomCategories = (categoryId: string) => async (
  dispatch: DispatchType
) => {
  const data = await CategoryService.fetchCustomCategories(categoryId);
  const action: IAction = {
    type: actionTypes.FETCH_CUSTOM_CATEGORY_SUCCESS,
    payload: {
      products: data.products
    },
  };
  dispatch(action);
  return data;
};

export const fetchCustomBrands = (brandId: string) => async (
  dispatch: DispatchType
) => {
  const data = await CategoryService.fetchCustomBrands(brandId);
  const action: IAction = {
    type: actionTypes.FETCH_CUSTOM_BRAND_SUCCESS,
    payload: {
      products: data.products
    },
  };
  dispatch(action);
  return data;
};
