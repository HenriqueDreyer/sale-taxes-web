import { createAction, props } from "@ngrx/store";
import { ACTION } from "src/app/shared/constants/constants";
import { Product } from "src/app/shared/entities/product.entity";

export const addProductToCart = createAction(
  ACTION.ADD_PRODUCT_CART,
  props<{ product: Product; }>()
);

export const addProductToCartSuccess = createAction(
  ACTION.ADD_PRODUCT_CART_SUCCESS,
  props<{ product: Product; }>()
);

export const addProductToCartError = createAction(
  ACTION.ADD_PRODUCT_CART_ERROR,
  props<{ errorMessage: any; }>()
);

export const removeProductToCart = createAction(
  ACTION.REMOVE_PRODUCT_CART,
  props<{ product: Product; }>()
);

export const removeProductToCartSuccess = createAction(
  ACTION.REMOVE_PRODUCT_CART_SUCCESS,
  props<{ index: number }>()
);

export const removeProductToCartError = createAction(
  ACTION.REMOVE_PRODUCT_CART_ERROR,
  props<{ errorMessage: any; }>()
);

export const findProductsList = createAction(
  ACTION.LOAD_PRODUCTS,
  props<{ name?: string; isImported?: string }>()
);

export const findProductsListSuccess = createAction(
  ACTION.LOAD_PRODUCTS_SUCCESS,
  props<{ products: Product[] }>()
);

export const findProductsListError = createAction(
  ACTION.LOAD_PRODUCTS_ERROR,
  props<{ errorMessage: any }>()
);

export const PRODUCT_ACTIONS = {
  findProductsListError,
  findProductsListSuccess,
  findProductsList,
  removeProductToCartError,
  removeProductToCartSuccess,
  removeProductToCart,
  addProductToCartSuccess,
  addProductToCartError,
  addProductToCart
};
