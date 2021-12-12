import { ProceedProduct, Product } from "src/app/shared/entities/product.entity";

export interface AppState {
  myCart: Product[];
  productList: Product[];
  checkout: ProceedProduct[];
}
