import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/shared/entities/product.entity';
import { AppState } from '../../state/app.state';
import { PRODUCT_ACTIONS } from '../../state/product.actions';

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.scss']
})
export class CheckoutItemComponent implements OnInit {
  @Input() product!: Product;
  @Input() index!: number;

  productLocale: string = '';

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    if(this.product) {
      this.productLocale = this.product.isImported == 'S'? 'Imported' : 'National';
    }
  }

  onDeleteItem(): void {
    console.log(`Remove item from index ${this.index}`);
      this.store.dispatch(PRODUCT_ACTIONS.removeProductsToCart({ index: this.index }));
  }

}
