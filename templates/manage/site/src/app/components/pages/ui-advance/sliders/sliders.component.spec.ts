import { ComponentFixture, TestTask } from '@angular/core/testing';

import { SlidersComponent } from './sliders.component';

describe('SlidersComponent', () => {
  let component: SlidersComponent;
  let fixture: ComponentFixture<SlidersComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ SlidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(SlidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
