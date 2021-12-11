import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/shared/entities/product.entity';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Output() onClickBuy = new EventEmitter();
  @Input() item!: Product;

  productLocale: string = '';

  constructor() { }

  ngOnInit(): void {
    this.productLocale = this.item.isImported == 'S'? 'Imported' : 'National';
  }

  checkOut(): void {
    console.log('COMPROU');
    this.onClickBuy.emit(this.item);
  }

}
