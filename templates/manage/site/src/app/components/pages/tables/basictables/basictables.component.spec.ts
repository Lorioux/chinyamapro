import { ComponentFixture, TestTask } from '@angular/core/testing';

import { BasictablesComponent } from './basictables.component';

describe('BasictablesComponent', () => {
  let component: BasictablesComponent;
  let fixture: ComponentFixture<BasictablesComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ BasictablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(BasictablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
