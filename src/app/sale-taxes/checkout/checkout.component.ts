import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/shared/entities/product.entity';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  @Output() onCheckout = new EventEmitter();
  @Output() onDeleteItem = new EventEmitter();
  @Input() numberItens!: number;
  @Input() cartItens!: Array<Product>;

  constructor() { }

  ngOnInit(): void {
  }

  onCheckoutClick(): void {
    this.onCheckout.emit('FINALIZAR');
  }

  onDeleteItemClick(value: Product) {
    this.onDeleteItem.emit(value);
  }

}
