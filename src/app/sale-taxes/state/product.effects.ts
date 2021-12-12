import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ProductService } from '../service/product.service';
import { AppState } from './app.state';
import { PRODUCT_ACTIONS } from './product.actions';

@Injectable()
export class ExportProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private store: Store<AppState>
  ) {}

  findProductList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PRODUCT_ACTIONS.findProductsList),
      switchMap((action) =>
        this.productService
          .findProductsFilter(action.name, action.isImported)
          .pipe(
            map((result) => {
              return PRODUCT_ACTIONS.findProductsListSuccess({
                products: result,
              });
            }),
            catchError((err) => {
              return of(
                PRODUCT_ACTIONS.findProductsListError({
                  errorMessage: err,
                })
              );
            })
          )
      )
    )
  );

  addProductToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PRODUCT_ACTIONS.addProductToCart),
      switchMap((action) =>
        of(PRODUCT_ACTIONS.addProductToCartSuccess({ product: action.product }))
      )
    )
  );

  removeProductCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PRODUCT_ACTIONS.removeProductsToCart),
      switchMap((action) => of(PRODUCT_ACTIONS.removeProductsToCartSuccess()))
    )
  );

  removeCheckout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PRODUCT_ACTIONS.removeCheckout),
      switchMap((action) => of(PRODUCT_ACTIONS.removeCheckoutSuccess()))
    )
  );

  addCheckoutProceed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PRODUCT_ACTIONS.loadCheckout),
      switchMap((action) =>
        of(PRODUCT_ACTIONS.loadCheckoutSuccess({ products: action.products }))
      )
    )
  );

  addProductToCheckout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PRODUCT_ACTIONS.addItemToCheckout),
      switchMap((action) =>
        of(PRODUCT_ACTIONS.addItemToCheckoutSuccess({ product: action.product }))
      )
    )
  );
}
