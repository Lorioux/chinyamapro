import { ComponentFixture, TestTask } from '@angular/core/testing';

import { LockscreenComponent } from './lockscreen.component';

describe('LockscreenComponent', () => {
  let component: LockscreenComponent;
  let fixture: ComponentFixture<LockscreenComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ LockscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(LockscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
