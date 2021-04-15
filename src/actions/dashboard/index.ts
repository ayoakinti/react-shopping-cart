import * as actionTypes from "../types";

import { IAction } from "../../reducers/modules/productReducer";
import { DispatchType } from "../products";
import DashboardService from "../../services/dashboard.service";

export const fetchDashboard = () => async (dispatch: DispatchType) => {
  const data = await DashboardService.fetchDashboard();
  const action: IAction = {
    type: actionTypes.FETCH_DASHBOARD_SUCCESS,
    payload: {
      imageUrls: data.dashboard.imageUrls,
      featuredProducts: data.featuredProducts,
      latestProducts: data.latestProducts,
      cheapestProducts: data.cheapestProducts,
      bestSellingProducts: data.bestSellingProducts,
      featuredCategories: data.featuredCategories,
    },
  };
  dispatch(action);
  return data;
};
