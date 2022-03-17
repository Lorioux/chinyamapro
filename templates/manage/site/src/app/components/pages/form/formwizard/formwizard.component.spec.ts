import { ComponentFixture, TestTask } from '@angular/core/testing';

import { FormwizardComponent } from './formwizard.component';

describe('FormwizardComponent', () => {
  let component: FormwizardComponent;
  let fixture: ComponentFixture<FormwizardComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ FormwizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(FormwizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
