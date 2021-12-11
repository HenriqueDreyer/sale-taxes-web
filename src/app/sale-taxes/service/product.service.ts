import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/entities/product.entity';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  findProductsFilter(
    name?: string,
    isImported?: string
  ): Observable<Product[]> {
    let apiUrl = '/api/products/filter';

    if (name) {
      apiUrl = `${apiUrl}?name=${name}`;
    }

    if (isImported) {
      apiUrl = `${apiUrl}?isImported=${isImported};`;
    }

    return this.httpClient.get<Product[]>(`${baseUrl}${apiUrl}`);
  }
}
