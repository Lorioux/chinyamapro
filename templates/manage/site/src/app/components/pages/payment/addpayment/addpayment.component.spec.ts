import { ComponentFixture, TestTask } from '@angular/core/testing';

import { AddpaymentComponent } from './addpayment.component';

describe('AddpaymentComponent', () => {
  let component: AddpaymentComponent;
  let fixture: ComponentFixture<AddpaymentComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ AddpaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(AddpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
