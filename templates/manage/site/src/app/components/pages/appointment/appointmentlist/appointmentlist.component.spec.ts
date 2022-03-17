import { ComponentFixture, TestTask } from '@angular/core/testing';

import { AppointmentlistComponent } from './appointmentlist.component';

describe('AppointmentlistComponent', () => {
  let component: AppointmentlistComponent;
  let fixture: ComponentFixture<AppointmentlistComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ AppointmentlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(AppointmentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
