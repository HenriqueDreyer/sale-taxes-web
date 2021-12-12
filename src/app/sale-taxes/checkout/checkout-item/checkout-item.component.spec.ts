import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MockForUnitTestService } from 'src/app/shared/mock-for-unit-test.service';
import { StoreModule } from '@ngrx/store';

import { CheckoutItemComponent } from './checkout-item.component';
import { AppState } from '../../state/app.state';

describe('CheckoutItemComponent', () => {
  let component: CheckoutItemComponent;
  let fixture: ComponentFixture<CheckoutItemComponent>;
  let store: MockStore;
  let mockService: MockForUnitTestService;

  const initialState: AppState = {
    myCart: [],
    productList: [],
    checkout: [],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckoutItemComponent],
      providers: [
        MockForUnitTestService,
        HttpClient,
        provideMockStore({ initialState: initialState })
      ],
      imports: [],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    mockService = TestBed.inject(MockForUnitTestService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutItemComponent);
    component = fixture.componentInstance;
    component.product = mockService.builderProduct();
    component.index = 0;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
