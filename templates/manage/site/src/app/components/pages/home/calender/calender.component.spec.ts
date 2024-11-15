import { ComponentFixture, TestTask } from '@angular/core/testing';

import { CalenderComponent } from './calender.component';

describe('CalenderComponent', () => {
  let component: CalenderComponent;
  let fixture: ComponentFixture<CalenderComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ CalenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(CalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
