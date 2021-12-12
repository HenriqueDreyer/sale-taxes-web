import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { CheckoutItemComponent } from './checkout/checkout-item/checkout-item.component';
import { StoreModule } from '@ngrx/store';
import { REDUCER } from '../shared/constants/constants';
import { productReducer } from './state/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ExportProductEffects } from './state/product.effects';
import { ProductService } from './service/product.service';
import { ProceedCheckoutModalComponent } from './checkout/proceed-checkout-modal/proceed-checkout-modal.component';

@NgModule({
  declarations: [
    ProductListComponent,
    CheckoutComponent,
    ProductItemComponent,
    CheckoutItemComponent,
    ProceedCheckoutModalComponent
  ],
  exports: [
    ProductListComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(REDUCER.PRODUCTS, productReducer),
    EffectsModule.forFeature([ ExportProductEffects ]),
  ],
  providers: [
    ProductService
  ],
})
export class SaleTaxesModule { }
