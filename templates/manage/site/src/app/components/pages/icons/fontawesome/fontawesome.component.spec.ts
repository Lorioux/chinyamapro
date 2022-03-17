import { ComponentFixture, TestTask } from '@angular/core/testing';

import { FontawesomeComponent } from './fontawesome.component';

describe('FontawesomeComponent', () => {
  let component: FontawesomeComponent;
  let fixture: ComponentFixture<FontawesomeComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ FontawesomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(FontawesomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
