import { ComponentFixture, TestTask } from '@angular/core/testing';

import { FlaticonsComponent } from './flaticons.component';

describe('FlaticonsComponent', () => {
  let component: FlaticonsComponent;
  let fixture: ComponentFixture<FlaticonsComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ FlaticonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(FlaticonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
