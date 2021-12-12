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
    myCart: initialState.myCart
  })),
  on(PRODUCT_ACTIONS.removeCheckoutSuccess, (state, action) => ({
    ...state,
    checkout: initialState.checkout
  })),
  on(PRODUCT_ACTIONS.loadCheckoutSuccess, (state, action) => ({
    ...state,
    checkout: state.checkout
  })),
  on(PRODUCT_ACTIONS.addItemToCheckoutSuccess, (state, action) => ({
    ...state,
    checkout: [...state.checkout, action.product]
  })),
);

export function productReducer(state: AppState, action: Action): any {
  return reducer(state, action);
}
