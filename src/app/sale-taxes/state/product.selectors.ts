import { Action, createFeatureSelector, createSelector } from "@ngrx/store";
import { REDUCER } from "src/app/shared/constants/constants";
import { Product } from "src/app/shared/entities/product.entity";
import { AppState } from "./app.state";

export const getAppState = createFeatureSelector<AppState>(REDUCER.PRODUCTS);

export const selectProductList = createSelector(
  getAppState,
  (state: AppState) => state?.productList
);

export const selectMyCart = createSelector(
  getAppState,
  (state: AppState) => state?.myCart
);

export const selectCheckout = createSelector(
  getAppState,
  (state: AppState) => state?.checkout
);
