export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  productType: ProductType;
  isImported: string;
}

export interface ProceedProduct {
  id: number;
  name: string;
  price: number;
  isImported: string;
  basicTax: number;
  additionalTax: number;
  total: number;
}

export enum ProductType {
  BOOK = 1,
  FOOD = 2,
  MEDKIT = 3,
  OTHER = 4
}
