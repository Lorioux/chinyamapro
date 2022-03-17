import { ComponentFixture, TestTask } from '@angular/core/testing';

import { DepartmentlistComponent } from './departmentlist.component';

describe('DepartmentlistComponent', () => {
  let component: DepartmentlistComponent;
  let fixture: ComponentFixture<DepartmentlistComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ DepartmentlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(DepartmentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
