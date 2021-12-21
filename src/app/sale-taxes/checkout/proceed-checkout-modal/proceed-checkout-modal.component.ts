import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Product, ProductType } from 'src/app/shared/entities/product.entity';
import { AppState } from '../../state/app.state';
import { PRODUCT_ACTIONS } from '../../state/product.actions';
import { selectCheckout, selectMyCart } from '../../state/product.selectors';

@Component({
  selector: 'app-proceed-checkout-modal',
  templateUrl: './proceed-checkout-modal.component.html',
  styleUrls: ['./proceed-checkout-modal.component.scss']
})
export class ProceedCheckoutModalComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  totalPay: number = 0.0;
  totalTax: number = 0.0;

  subscribers: Array<Subscription> = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.loadCartProductsFromStore();
  }

  ngOnDestroy(): void {
    this.subscribers.forEach((sub) => sub.unsubscribe());
  }

  close(): void {
    this.store.dispatch(PRODUCT_ACTIONS.removeCheckout());
    this.totalPay = 0.0;
    this.totalTax = 0.0;

  }

  private loadCartProductsFromStore(): void {
    const sub = this.store
      .pipe(select(selectCheckout))
      .subscribe((source: Product[]) => {
        if (source) {
          this.products = source;
          this.calculateTotal();
        }
      });
    this.subscribers.push(sub);
  }

  private calculateTotal(): void {
    let valueToPay = 0.00;
    let valueTax = 0.00;
    this.products.forEach((product) => {
      valueToPay += product.totalPrice;
      valueTax += product.totalTaxes;
    });

    this.totalTax = valueTax;
    this.totalPay = valueToPay;
  }

}
