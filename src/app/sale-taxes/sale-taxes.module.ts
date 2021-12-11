import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { CheckoutItemComponent } from './checkout/checkout-item/checkout-item.component';

@NgModule({
  declarations: [
    ProductListComponent,
    CheckoutComponent,
    ProductItemComponent,
    CheckoutItemComponent
  ],
  exports: [
    ProductListComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class SaleTaxesModule { }
