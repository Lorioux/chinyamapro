import { ComponentFixture, TestTask } from '@angular/core/testing';

import { CropperComponent } from './cropper.component';

describe('CropperComponent', () => {
  let component: CropperComponent;
  let fixture: ComponentFixture<CropperComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ CropperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(CropperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
