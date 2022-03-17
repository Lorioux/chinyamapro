import { ComponentFixture, TestTask } from '@angular/core/testing';

import { ProjectmanagementComponent } from './projectmanagement.component';

describe('ProjectmanagementComponent', () => {
  let component: ProjectmanagementComponent;
  let fixture: ComponentFixture<ProjectmanagementComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ ProjectmanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(ProjectmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
