import { ComponentFixture, TestTask } from '@angular/core/testing';

import { AddemployeeComponent } from './addemployee.component';

describe('AddemployeeComponent', () => {
  let component: AddemployeeComponent;
  let fixture: ComponentFixture<AddemployeeComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ AddemployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(AddemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
