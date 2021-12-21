import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ProceedProduct, Product, ProductType } from 'src/app/shared/entities/product.entity';
import { AppState } from '../../state/app.state';
import { PRODUCT_ACTIONS } from '../../state/product.actions';
import { selectMyCart } from '../../state/product.selectors';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit, OnDestroy {
  @Input() item!: Product;

  subscribers: Array<Subscription> = [];
  productLocale: string = '';

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.productLocale = this.item.isImported === 'S'? 'Imported' : 'National';
  }

  ngOnDestroy(): void {
    this.subscribers.forEach((sub) => sub.unsubscribe());
  }

  buyItem(): void {
    const prd: ProceedProduct = {
      id: this.item.id,
      name: this.item.name,
      price: this.item.price,
      isImported: this.item.isImported,
      basicTax: this.basicTax(this.item.productType),
      additionalTax: this.additionalTax(this.item.isImported),
      total: this.calculateTotal(this.item.price, this.item.productType, this.item.isImported)
    };

    this.store.dispatch(PRODUCT_ACTIONS.addProductToCart({ product: this.item }));
    this.store.dispatch(PRODUCT_ACTIONS.addItemToCheckout({ product: prd }));
  }

  private calculateTotal(price: number, productType: ProductType, isImported: string): number {
    const basicTax = this.basicTax(productType);
    const additionalTax = this.additionalTax(isImported);

    return ((basicTax + additionalTax) * price) + price;
   // return Number(Math.ceil((total*20 - 0.05)/20).toFixed(2));
  }

  private basicTax(productType: ProductType): number {
    if(productType === ProductType.OTHER) {
      return 0.10;
    }
    return 0.0;
  }

  private additionalTax(isImported: string): number {
    if(isImported === 'S') {
      return 0.05;
    }
    return 0.0;
  }

}
