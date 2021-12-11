import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/entities/product.entity';
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
    this.productLocale = this.item.isImported == 'S'? 'Imported' : 'National';
  }

  ngOnDestroy(): void {
    this.subscribers.forEach((sub) => sub.unsubscribe());
  }

  buyItem(): void {
    this.store.dispatch(PRODUCT_ACTIONS.addProductToCart({ product: this.item }));
  }

}
