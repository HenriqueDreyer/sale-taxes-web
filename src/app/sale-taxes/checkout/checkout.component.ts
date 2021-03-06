import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/entities/product.entity';
import { AppState } from '../state/app.state';
import { PRODUCT_ACTIONS } from '../state/product.actions';
import { selectMyCart } from '../state/product.selectors';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy, OnChanges {
  cartItens: Array<Product> = [];
  numberItens = this.cartItens.length;

  subscribers: Array<Subscription> = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.loadCartFromStore();
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnDestroy(): void {
    this.subscribers.forEach((sub) => sub.unsubscribe());
  }

  onCheckoutClick(): void {
    this.store.dispatch(PRODUCT_ACTIONS.addItemToCheckout({ product: this.cartItens }));
  }

  clean(): void {
    this.store.dispatch(PRODUCT_ACTIONS.removeProductsToCart());
    this.store.dispatch(PRODUCT_ACTIONS.removeCheckout());
  }

  private loadCartFromStore(): void {
    const sub = this.store
      .pipe(select(selectMyCart))
      .subscribe((source: Product[]) => {
        if (source) {
          this.cartItens = source;
        }
      });
    this.subscribers.push(sub);
  }

}
