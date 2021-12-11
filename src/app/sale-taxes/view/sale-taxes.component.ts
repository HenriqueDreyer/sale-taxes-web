import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/entities/product.entity';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-sale-taxes',
  templateUrl: './sale-taxes.component.html',
  styleUrls: ['./sale-taxes.component.scss']
})
export class SaleTaxesComponent implements OnInit {
  myCart: Array<Product> = [];
  products: Array<Product> = [];

  numberItensSelected: number = this.myCart.length;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProductsFromApi();
  }

  onAddProductToCart(value: Product): void {
    console.log(`O item ${value.name} adicionado no carrinho`);
    this.myCart.push(value);
  }

  onCheckout(value: Product): void {
    console.log(value);
  }

  onDeleteItemCart(value: Product): void {
    console.log(`${value.name} deletado`);
  }

  private loadProductsFromApi(): void {
    this.productService.findProductsFilter().subscribe((itens) => {
      if(itens) {
        this.products = itens;
      }
    });
  }

}
