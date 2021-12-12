import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ProceedProduct, Product, ProductType } from 'src/app/shared/entities/product.entity';
import { AppState } from '../../state/app.state';
import { PRODUCT_ACTIONS } from '../../state/product.actions';
import { selectMyCart } from '../../state/product.selectors';

@Component({
  selector: 'app-proceed-checkout-modal',
  templateUrl: './proceed-checkout-modal.component.html',
  styleUrls: ['./proceed-checkout-modal.component.scss']
})
export class ProceedCheckoutModalComponent implements OnInit, OnDestroy {
  cartProducts: Product[] = [];
  products: ProceedProduct[] = [];
  total: number = 0.0;

  subscribers: Array<Subscription> = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.loadCartProductsFromStore();
  }

  ngOnDestroy(): void {
    this.subscribers.forEach((sub) => sub.unsubscribe());
  }

  close(): void {
    this.store.dispatch(PRODUCT_ACTIONS.removeProductsToCart());
    this.cartProducts = [];
    this.products = [];
    this.total = 0.0;
  }

  private loadCartProductsFromStore(): void {
    const sub = this.store
      .pipe(select(selectMyCart))
      .subscribe((source: Product[]) => {
        if (source) {
          this.cartProducts = source;
          this.calculateProductValues();
        }
      });
    this.subscribers.push(sub);
  }

  private calculateProductValues(): void {
    this.cartProducts.forEach( (item) => {
      let prd: ProceedProduct = {
        id: item.id,
        name: item.name,
        price: item.price,
        isImported: item.isImported,
        basicTax: this.basicTax(item.productType),
        additionalTax: this.additionalTax(item.isImported),
        total: this.calculateTotal(item.price, item.productType, item.isImported)
      };
      this.products.push(prd);
    });
    this.calculateTotalValue();
  }

  private calculateTotal(price: number, productType: ProductType, isImported: string): number {
    const basicTax = this.basicTax(productType);
    const additionalTax = this.additionalTax(isImported);
    const total = (price*basicTax)+(price*additionalTax) + price;
    return Number((Math.ceil(total*20 - 0.5)/20).toFixed(2));
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

  private calculateTotalValue(): void {
    this.products.forEach((prod) => {
      this.total = this.total + prod.total
    });
  }

}
