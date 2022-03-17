import { ComponentFixture, TestTask } from '@angular/core/testing';

import { PaymentlistComponent } from './paymentlist.component';

describe('PaymentlistComponent', () => {
  let component: PaymentlistComponent;
  let fixture: ComponentFixture<PaymentlistComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ PaymentlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(PaymentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
