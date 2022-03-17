import { ComponentFixture, TestTask } from '@angular/core/testing';

import { ProgressbarsComponent } from './progressbars.component';

describe('ProgressbarsComponent', () => {
  let component: ProgressbarsComponent;
  let fixture: ComponentFixture<ProgressbarsComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ ProgressbarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(ProgressbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
