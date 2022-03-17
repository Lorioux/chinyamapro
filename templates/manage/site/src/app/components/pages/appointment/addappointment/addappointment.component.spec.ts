import { ComponentFixture, TestTask } from '@angular/core/testing';

import { AddappointmentComponent } from './addappointment.component';

describe('AddappointmentComponent', () => {
  let component: AddappointmentComponent;
  let fixture: ComponentFixture<AddappointmentComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ AddappointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(AddappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
