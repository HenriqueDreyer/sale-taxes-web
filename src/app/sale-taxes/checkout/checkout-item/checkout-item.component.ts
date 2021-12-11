import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/shared/entities/product.entity';

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.scss']
})
export class CheckoutItemComponent implements OnInit {
  @Output() deleteItem = new EventEmitter();
  @Input() item!: Product;

  productLocale: string = '';

  constructor() { }

  ngOnInit(): void {
    if(this.item) {
      this.productLocale = this.item.isImported == 'S'? 'Imported' : 'National';
    }
  }

  onDeleteItem(): void {
    this.deleteItem.emit(this.item);
  }

}
