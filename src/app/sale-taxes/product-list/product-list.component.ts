import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/entities/product.entity';
import { AppState } from '../state/app.state';
import { selectProductList } from '../state/product.selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  @Output() myCart = new EventEmitter();
  dataSource: Array<Product> = [];

  subscribers: Array<Subscription> = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.loadProductsFromStore();
  }

  ngOnDestroy(): void {
    this.subscribers.forEach((sub) => sub.unsubscribe());
  }

  addProductCart(value: Product): void {
    this.myCart.emit(value);
  }

  private loadProductsFromStore(): void {
    const sub = this.store
      .pipe(select(selectProductList))
      .subscribe((source: Product[]) => {
        if (source) {
          this.dataSource = source;
        }
      });
    this.subscribers.push(sub);
  }
}
