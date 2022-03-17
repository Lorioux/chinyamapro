import { ComponentFixture, TestTask } from '@angular/core/testing';

import { PaymentinvoiceComponent } from './paymentinvoice.component';

describe('PaymentinvoiceComponent', () => {
  let component: PaymentinvoiceComponent;
  let fixture: ComponentFixture<PaymentinvoiceComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ PaymentinvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(PaymentinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
