import { ICategory } from './categoryReducer';
import { IAction, IProduct } from "./productReducer";
import * as actionTypes from "../../actions/types";

type IImageUrls = {
  landingLeft: string;
  landingRight: string;
  landingMobile: string;
  clearanceSales: string;
  newArrivals: string;
};

export type DashboardState = {
  imageUrls: IImageUrls | null;
  featuredProducts: IProduct[];
  latestProducts: IProduct[];
  cheapestProducts: IProduct[];
  bestSellingProducts: IProduct[];
  featuredCategories: ICategory[];
};

const initialState: DashboardState = {
  imageUrls: null,
  featuredProducts: [],
  latestProducts: [],
  cheapestProducts: [],
  bestSellingProducts: [],
  featuredCategories: [],
};

const DashboardReducer = (
  state: DashboardState = initialState,
  action: IAction
): DashboardState => {
  switch (action.type) {
    case actionTypes.FETCH_DASHBOARD_SUCCESS:
      return {
        ...state,
        imageUrls: action.payload.imageUrls,
        featuredProducts: action.payload.featuredProducts,
        latestProducts: action.payload.latestProducts,
        cheapestProducts: action.payload.cheapestProducts,
        bestSellingProducts: action.payload.bestSellingProducts,
        featuredCategories: action.payload.featuredCategories,
      };
    // case actionTypes.LOGOUT_SUCCESS:
    //   return initialState;
  }
  return state;
};

export default DashboardReducer;
