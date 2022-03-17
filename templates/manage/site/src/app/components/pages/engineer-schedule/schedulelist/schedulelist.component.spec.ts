import { ComponentFixture, TestTask } from '@angular/core/testing';

import { SchedulelistComponent } from './schedulelist.component';

describe('SchedulelistComponent', () => {
  let component: SchedulelistComponent;
  let fixture: ComponentFixture<SchedulelistComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ SchedulelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(SchedulelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
