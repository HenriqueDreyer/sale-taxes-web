import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/shared/entities/product.entity';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Output() myCart = new EventEmitter();
  @Input() dataSource!: Array<Product>;

  constructor() { }

  ngOnInit(): void {
  }

  addProductCart(value: Product): void {
    this.myCart.emit(value);
  }

}
