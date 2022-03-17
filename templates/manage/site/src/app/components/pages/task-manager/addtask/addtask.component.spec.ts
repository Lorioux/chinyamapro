import { ComponentFixture, TestTask } from '@angular/core/testing';

import { AddtaskComponent } from './addtask.component';

describe('AddtaskComponent', () => {
  let component: AddtaskComponent;
  let fixture: ComponentFixture<AddtaskComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ AddtaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(AddtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
