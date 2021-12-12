import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MockForUnitTestService } from 'src/app/shared/mock-for-unit-test.service';

import { ProductItemComponent } from './product-item.component';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;
  let store: MockStore;
  let mockService: MockForUnitTestService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductItemComponent ],
      providers: [
        HttpClient,
        provideMockStore({}),
      ]
    })
    .compileComponents();
    store = TestBed.inject(MockStore);
    mockService = TestBed.inject(MockForUnitTestService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.productLocale = 'Imported';
    component.item = mockService.builderProduct();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

