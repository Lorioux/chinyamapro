import { ComponentFixture, TestTask } from '@angular/core/testing';

import { TourComponent } from './tour.component';

describe('TourComponent', () => {
  let component: TourComponent;
  let fixture: ComponentFixture<TourComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ TourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(TourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
