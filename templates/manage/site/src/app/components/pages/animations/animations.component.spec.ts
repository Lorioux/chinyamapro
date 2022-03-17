import { ComponentFixture, TestTask } from '@angular/core/testing';

import { AnimationsComponent } from './animations.component';

describe('AnimationsComponent', () => {
  let component: AnimationsComponent;
  let fixture: ComponentFixture<AnimationsComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ AnimationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(AnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
