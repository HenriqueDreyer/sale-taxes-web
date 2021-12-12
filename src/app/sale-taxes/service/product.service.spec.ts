import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { environment } from '../../../environments/environment';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

const baseUrl = environment.baseUrl;

describe('ProductService', () => {
  let service: ProductService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ProductService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`${ProductService.prototype.findProductsFilter.name}
  should use GET to retrieve products from API`, () => {
    service.findProductsFilter().subscribe();
    const requestTest = httpTestingController.expectOne(
      `${baseUrl}/api/products/filter`
    )

    expect(requestTest.request.method).toEqual('GET');
  });
});
