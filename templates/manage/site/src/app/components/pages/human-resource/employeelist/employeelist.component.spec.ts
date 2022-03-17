import { ComponentFixture, TestTask } from '@angular/core/testing';

import { EmployeelistComponent } from './employeelist.component';

describe('EmployeelistComponent', () => {
  let component: EmployeelistComponent;
  let fixture: ComponentFixture<EmployeelistComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ EmployeelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(EmployeelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
