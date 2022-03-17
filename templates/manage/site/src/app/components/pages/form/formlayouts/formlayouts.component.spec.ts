import { ComponentFixture, TestTask } from '@angular/core/testing';

import { FormlayoutsComponent } from './formlayouts.component';

describe('FormlayoutsComponent', () => {
  let component: FormlayoutsComponent;
  let fixture: ComponentFixture<FormlayoutsComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ FormlayoutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(FormlayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
