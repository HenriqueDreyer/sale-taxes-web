import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MockForUnitTestService } from 'src/app/shared/mock-for-unit-test.service';
import { selectProductList } from '../state/product.selectors';
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let store: MockStore;
  let mockService: MockForUnitTestService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      providers: [
        HttpClient,
        provideMockStore({}),
      ]
    }).compileComponents();
    store = TestBed.inject(MockStore);
    mockService = TestBed.inject(MockForUnitTestService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    store.overrideSelector(selectProductList, mockService.builderProductList());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
