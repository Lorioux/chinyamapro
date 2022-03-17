import { ComponentFixture, TestTask } from '@angular/core/testing';

import { FormvalidationComponent } from './formvalidation.component';

describe('FormvalidationComponent', () => {
  let component: FormvalidationComponent;
  let fixture: ComponentFixture<FormvalidationComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ FormvalidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(FormvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
