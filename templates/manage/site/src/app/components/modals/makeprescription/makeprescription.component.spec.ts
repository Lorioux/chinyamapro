import { ComponentFixture, TestTask } from '@angular/core/testing';

import { MakeprescriptionComponent } from './makeprescription.component';

describe('MakeprescriptionComponent', () => {
  let component: MakeprescriptionComponent;
  let fixture: ComponentFixture<MakeprescriptionComponent>;

  beforeEach(async () => {
    await TestTask.configureTestingModule({
      declarations: [ MakeprescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestTask.createComponent(MakeprescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
