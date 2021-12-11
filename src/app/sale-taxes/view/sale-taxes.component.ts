import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/shared/entities/product.entity';
import { ProductService } from '../service/product.service';
import { AppState } from '../state/app.state';
import { PRODUCT_ACTIONS } from '../state/product.actions';

@Component({
  selector: 'app-sale-taxes',
  templateUrl: './sale-taxes.component.html',
  styleUrls: ['./sale-taxes.component.scss'],
})
export class SaleTaxesComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.loadProductsFromApi();
  }

  private loadProductsFromApi(): void {
    this.store.dispatch(PRODUCT_ACTIONS.findProductsList({}));
  }
}
