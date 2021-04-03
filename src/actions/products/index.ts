import * as actionTypes from "../types";
import ProductService from "../../services/product.service";

import { ProductAction } from "../../reducers/modules/productReducer";

type DispatchType = (args: ProductAction) => ProductAction;

export const fetchAllProducts = () => async (dispatch: DispatchType) => {
  const data = await ProductService.fetchAllProducts();
  const action: ProductAction = {
    type: actionTypes.FETCH_ALL_PRODUCTS_SUCCESS,
    payload: data,
  };
  dispatch(action);
  return data;
};
