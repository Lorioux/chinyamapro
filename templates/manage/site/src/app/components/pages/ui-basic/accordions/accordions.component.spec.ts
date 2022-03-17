import { ComponentFixture, TestTask } from '@angular/core/testing';

import { AccordionsComponent } from './accordions.component';

describe('AccordionsComponent', () => {
  let component: AccordionsComponent;
  let fixture: ComponentFixture<AccordionsComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ AccordionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(AccordionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
