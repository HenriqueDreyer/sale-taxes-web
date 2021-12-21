import { createAction, props } from "@ngrx/store";
import { ACTION } from "src/app/shared/constants/constants";
import { Product } from "src/app/shared/entities/product.entity";

export const addProductToCart = createAction(
  ACTION.ADD_PRODUCT_CART,
  props<{ product: Product }>()
);

export const addProductToCartSuccess = createAction(
  ACTION.ADD_PRODUCT_CART_SUCCESS,
  props<{ product: Product }>()
);

export const removeProductsToCart = createAction(
  ACTION.REMOVE_PRODUCT_CART
);

export const removeProductsToCartSuccess = createAction(
  ACTION.REMOVE_PRODUCT_CART_SUCCESS
);

export const findProductsList = createAction(
  ACTION.LOAD_PRODUCTS,
  props<{ name?: string, isImported?: string }>()
);

export const findProductsListSuccess = createAction(
  ACTION.LOAD_PRODUCTS_SUCCESS,
  props<{ products: Product[] }>()
);

export const findProductsListError = createAction(
  ACTION.LOAD_PRODUCTS_ERROR,
  props<{ errorMessage: any }>()
);

export const loadCheckout = createAction(
  ACTION.LOAD_CHECKOUT,
  props<{ products: Product[] }>()
);

export const loadCheckoutSuccess = createAction(
  ACTION.LOAD_CHECKOUT_SUCCESS,
  props<{ products: Product[] }>()
);

export const removeCheckout = createAction(
  ACTION.REMOVE_CHECKOUT
);

export const removeCheckoutSuccess = createAction(
  ACTION.REMOVE_CHECKOUT_SUCCESS
);

export const addItemToCheckout = createAction(
  ACTION.ADD_CHECKOUT,
  props<{ product: Product[] }>()
);

export const addItemToCheckoutSuccess = createAction(
  ACTION.ADD_CHECKOUT_SUCCESS,
  props<{ product: Product[] }>()
);

export const PRODUCT_ACTIONS = {
  findProductsListError,
  findProductsListSuccess,
  findProductsList,
  removeProductsToCartSuccess,
  removeProductsToCart,
  addProductToCartSuccess,
  addProductToCart,
  loadCheckout,
  loadCheckoutSuccess,
  removeCheckout,
  removeCheckoutSuccess,
  addItemToCheckout,
  addItemToCheckoutSuccess,
};
