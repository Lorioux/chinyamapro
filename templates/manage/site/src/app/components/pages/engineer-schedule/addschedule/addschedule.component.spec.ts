import { ComponentFixture, TestTask } from '@angular/core/testing';

import { AddscheduleComponent } from './addschedule.component';

describe('AddscheduleComponent', () => {
  let component: AddscheduleComponent;
  let fixture: ComponentFixture<AddscheduleComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ AddscheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(AddscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
