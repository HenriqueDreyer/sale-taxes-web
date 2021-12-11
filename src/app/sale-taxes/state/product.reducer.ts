import { state } from "@angular/animations";
import { act } from "@ngrx/effects";
import { Action, createReducer, on } from "@ngrx/store";
import { AppState } from "./app.state";
import { PRODUCT_ACTIONS } from "./product.actions";

export const initialState: AppState = {
  myCart: [],
  productList: [],
  checkout: []
}

const reducer = createReducer(
  initialState,
  on(PRODUCT_ACTIONS.findProductsListSuccess, (state, action) => ({
    ...state,
    productList: action.products
  })),
  on(PRODUCT_ACTIONS.addProductToCartSuccess, (state, action) => ({
    ...state,
    myCart: [...state.myCart, action.product]
  })),
  on(PRODUCT_ACTIONS.removeProductsToCartSuccess, (state, action) => ({
    ...state,
    myCart: state.myCart.filter((value, index) =>{ index !== action.index })
  }))
);

export function productReducer(state: AppState, action: Action): any {
  return reducer(state, action);
}
