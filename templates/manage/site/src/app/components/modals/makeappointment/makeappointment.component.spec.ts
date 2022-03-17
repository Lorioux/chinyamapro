import { ComponentFixture, TestTask } from '@angular/core/testing';

import { MakeappointmentComponent } from './makeappointment.component';

describe('MakeappointmentComponent', () => {
  let component: MakeappointmentComponent;
  let fixture: ComponentFixture<MakeappointmentComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ MakeappointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(MakeappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
