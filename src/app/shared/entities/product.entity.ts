export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  basicTax: number;
  additionalTax: number;
  productType: ProductType;
  isImported: string;
  totalTaxes: number;
  totalPrice: number;
}

export enum ProductType {
  BOOK = 1,
  FOOD = 2,
  MEDKIT = 3,
  OTHER = 4
}
