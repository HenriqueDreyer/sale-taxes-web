import { Injectable } from '@angular/core';
import { Product } from './entities/product.entity';

@Injectable({
  providedIn: 'root'
})
export class MockForUnitTestService {

  constructor() { }

  builderProductList(): Product[] {
    return [
      {
        id: 1,
        name: 'JASMINE',
        price: 10.00,
        description: 'UNIT TEST',
        isImported: 'N',
        productType: 4
      },
      {
        id: 2,
        name: 'JASMINE',
        price: 10.90,
        description: 'UNIT TEST',
        isImported: 'N',
        productType: 2
      },
    ]
  }

  builderProduct(): Product {
    return {
      id: 1,
        name: 'JASMINE',
        price: 10.00,
        description: 'UNIT TEST',
        isImported: 'N',
        productType: 4
    }
  }
}
