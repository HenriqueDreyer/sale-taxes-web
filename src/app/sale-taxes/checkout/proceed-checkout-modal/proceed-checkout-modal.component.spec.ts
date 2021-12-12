import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceedCheckoutModalComponent } from './proceed-checkout-modal.component';

describe('ProceedCheckoutModalComponent', () => {
  let component: ProceedCheckoutModalComponent;
  let fixture: ComponentFixture<ProceedCheckoutModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProceedCheckoutModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProceedCheckoutModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
