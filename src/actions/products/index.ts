import * as actionTypes from "../types";
import ProductService from "../../services/product.service";

import { IAction } from "../../reducers/modules/productReducer";

export type DispatchType = (args: IAction) => IAction;

export const fetchAllProducts = () => async (dispatch: DispatchType) => {
  const data = await ProductService.fetchAllProducts();
  const action: IAction = {
    type: actionTypes.FETCH_ALL_PRODUCTS_SUCCESS,
    payload: data,
  };
  dispatch(action);
  return data;
};
